import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders a button with the given label', () => {
    render(<Button label="Clique aqui" onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Clique aqui');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Clique aqui" onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
