import { screen, render } from '@testing-library/react'
import Main from './Main'

describe('Main', () => {
  it('should render Main', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { level: 1, name: /nextjs boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the container background color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
