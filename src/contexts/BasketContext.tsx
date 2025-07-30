'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface BasketItem {
  name: string;
  quantity: number;
}

interface BasketContextType {
  items: BasketItem[];
  itemCount: number;
  addToCart: (product: string) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);

  const addToCart = (product: string) => {
    const alreadyInCart = items.find(item => item.name === product);
    if (alreadyInCart) {
      setItems(items.map(item =>
        item.name === product
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setItems([...items, { name: product, quantity: 1 }]);
    }
    setItemCount(itemCount + 1);
  };

  return (
    <BasketContext.Provider value={{ items, itemCount, addToCart }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
}
