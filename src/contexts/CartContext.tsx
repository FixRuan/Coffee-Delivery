import React, { useState } from "react";
import { createContext, ReactNode } from "react";
import { CoffeeCardProps } from "../components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends CoffeeCardProps {
	quantity: number;
}

interface CartContextType {
	cartItems: CartItem[]
	addCoffeeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	function addCoffeeToCart(coffee: CartItem) {

		const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);

		const newCart = produce(cartItems, (draft) => {
			if (coffeeAlreadyExistsInCart < 0) {
				draft.push(coffee);
			} else {
				draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
			}
		});

		setCartItems(newCart);
	}

	return (
		<CartContext.Provider value={{ cartItems, addCoffeeToCart }}>
			{children}
		</CartContext.Provider>
	);
}