import { act, render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { BasketProvider } from '@/contexts/BasketContext';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders an empty basket', () => {
    render(
      <BasketProvider>
        <Home />
      </BasketProvider>
    );

    const basketButton = screen.getByRole('link', {
      name: /Basket:/i,
    });

    expect(basketButton).toHaveTextContent('Basket: 0 items');
  });

  it('renders a basket with 1 item', () => {
    render(
      <BasketProvider>
        <Home />
      </BasketProvider>
    );

    const buttons = screen.getAllByRole('button', {
      name: /Add to basket/i,
    });

    act(() => {
      buttons[0].click();
    });

    const basketButton = screen.getByRole('link', {
      name: /Basket:/i,
    });

    expect(basketButton).toHaveTextContent(/Basket: 1 item$/);
  });

  it('renders a basket with 1 of item 1 and 2 of item 2', () => {
    render(
      <BasketProvider>
        <Home />
      </BasketProvider>
    );

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

    const basketButton = screen.getByRole('link', {
      name: /Basket:/i,
    });

    expect(basketButton).toHaveTextContent(/Basket: 3 items$/);
  });
});
