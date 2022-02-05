import { screen, render } from '@testing-library/react'
import Main from './Main'

describe('Main', () => {
  it('should render Main', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { level: 1, name: /nextjs boilerplate/i })
    ).toBeInTheDocument()
  })
})
