import { render, screen } from '@testing-library/react'
import App from './App'

test('renders home page welcome text', () => {
  render(<App />)
  const title = screen.getByText(/Hello and welcome!/i)
  expect(title).toBeInTheDocument()
})
