import React, { useState } from "react";
import { QuantityInput } from "../QuantityInput";
import { ShoppingCart } from "phosphor-react";

import {
	Container,
	Tags,
	Name,
	Description,
	CardFooter,
	AddCartWrapper
} from "./styles";
import { formatMoney } from "../../utils/formatMoney";
import { useCart } from "../../hooks/useCart";

export interface CoffeeCardProps {
	id: number;
	photo: string;
	name: string;
	tags: string[];
	description: string;
	price: number;
}

interface Coffee {
	coffee: CoffeeCardProps;
}

export function CoffeeCard({ coffee }: Coffee) {
	const [quantity, setQuantity] = useState(1);
	const { addCoffeeToCart } = useCart();

	function handleIncrease() {
		setQuantity(oldState => oldState + 1);
	}

	function handleDecrease() {
		setQuantity(oldState => oldState - 1);
	}

	function handleAddToCart() {

		const cofeeToAdd = {
			...coffee,
			quantity,
		};

		addCoffeeToCart(cofeeToAdd);
	}

	const formattedPrice = formatMoney(coffee.price);

	return (
		<Container>
			<img src={coffee.photo} alt="" />

			<Tags>
				{coffee.tags.map(tag => <span key={`${coffee.id}${tag}`}>{tag}</span>)}
			</Tags>

			<Name>{coffee.name}</Name>
			<Description>{coffee.description}</Description>

			<CardFooter>
				<div>
					<span>R$</span>
					<h2>{formattedPrice}</h2>
				</div>

				<AddCartWrapper>
					<QuantityInput
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
						quantity={quantity}
					/>

					<button onClick={handleAddToCart}>
						<ShoppingCart size={22} weight="fill" />
					</button>
				</AddCartWrapper>
			</CardFooter>
		</Container>
	);
}