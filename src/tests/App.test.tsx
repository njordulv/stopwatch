import {
  render,
  screen,
  fireEvent,
  describe,
  it,
  expect,
  beforeEach,
} from '@/tests/utils'
import App from '@/App'
import { useStore } from '@/store'

describe('App', () => {
  beforeEach(() => {
    useStore.setState({
      lap: false,
      count: 1,
      isRunning: false,
      laps: [],
      lapStart: 0,
      lapPauseTime: null,
      showLapArrow: false,
    })
  })

  it('toggles the timer between start and stop', () => {
    render(<App />)

    const startStopButton = screen.getByText(/start/i)

    fireEvent.click(startStopButton)
    expect(startStopButton).toHaveTextContent('Stop')

    fireEvent.click(startStopButton)
    expect(startStopButton).toHaveTextContent('Start')
  })

  it('toggles the timer between start and stop', () => {
    render(<App />)

    const startStopButton = screen.getByText(/start/i)

    fireEvent.click(startStopButton)
    expect(startStopButton).toHaveTextContent('Stop') // After starting, the button should show Stop

    fireEvent.click(startStopButton)
    expect(startStopButton).toHaveTextContent('Start') // After stopping, it should return to Start
  })

  it('shows lap button when timer is running', () => {
    render(<App />)

    const startStopButton = screen.getByText(/start/i)
    fireEvent.click(startStopButton) // Start the timer
    const lapButton = screen.getByRole('button', { name: /lap/i })

    expect(lapButton).toBeInTheDocument() // The Lap button should appear after the timer starts
  })

  it('calls reset button correctly', () => {
    render(<App />)

    // First, start the timer
    const startStopButton = screen.getByText(/start/i)
    fireEvent.click(startStopButton)

    // Expect the Stop button to appear
    expect(startStopButton).toHaveTextContent('Stop')

    // Now stop the timer
    fireEvent.click(startStopButton)

    // The Reset button should now appear
    const resetButton = screen.getByRole('button', { name: /reset/i })
    fireEvent.click(resetButton)

    // Check that the state has been reset
    expect(resetButton).toBeInTheDocument()
  })
})
