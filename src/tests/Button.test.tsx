import {
  render,
  screen,
  userEvent,
  describe,
  it,
  expect,
  vi,
} from '@/tests/utils'
import { Button } from '@/components/Button'

describe('Button FC', () => {
  it('renders button with text', () => {
    render(<Button onClick={() => {}}>Sample text</Button>)
    expect(
      screen.getByRole('button', { name: /sample text/i })
    ).toBeInTheDocument()
  })

  it('applies className correctly', () => {
    const { container } = render(
      <Button onClick={() => {}} className="custom-class">
        Click
      </Button>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('disables button when disabled prop is true', () => {
    render(
      <Button onClick={() => {}} disabled>
        Disabled
      </Button>
    )
    const button = screen.getByText('Disabled')
    expect(button).toBeDisabled()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    await userEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders button with icon as children', () => {
    render(
      <Button onClick={() => {}}>
        <span>Icon</span>
      </Button>
    )
    expect(screen.getByText('Icon')).toBeInTheDocument()
  })
})
