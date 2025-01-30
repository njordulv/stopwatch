import { render, screen, fireEvent, describe, it, expect } from '@/tests/utils'
import App from '@/App'

describe('App', () => {
  it('toggles the timer between start and stop', () => {
    render(<App />)

    const startStopButton = screen.getByText(/start/i)

    fireEvent.click(startStopButton)
    expect(startStopButton).toHaveTextContent('Stop')

    fireEvent.click(startStopButton)
    expect(startStopButton).toHaveTextContent('Start')
  })
})
