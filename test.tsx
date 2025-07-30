import { act, render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders an empty basket', () => {
    render(<Home />);

    const basketButton = screen.getByRole('button', {
      name: /Basket:/i,
    });

    expect(basketButton).toHaveTextContent('Basket: 0 items');
  });

  it('renders a basket with 1 item', () => {
    render(<Home />);

    const buttons = screen.getAllByRole('button', {
      name: /Add to basket/i,
    });

    act(() => {
      buttons[0].click();
    });

    const basketButton = screen.getByRole('button', {
      name: /Basket:/i,
    });

    expect(basketButton).toHaveTextContent(/Basket: 1 item$/);
  });

  it('renders a basket with 1 of item 1 and 2 of item 2', () => {
    render(<Home />);

    const buttons = screen.getAllByRole('button', {
      name: /Add to basket/i,
    });

    act(() => {
      buttons[0].click();
    })

    act(() => {
      buttons[1].click();
    })

    act(() => {
      buttons[1].click();
    })

    const basketButton = screen.getByRole('button', {
      name: /Basket:/i,
    });

    expect(basketButton).toHaveTextContent(/Basket: 3 items$/);
  });
});
