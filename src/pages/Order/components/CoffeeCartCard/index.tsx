import { Trash } from "phosphor-react";
import React from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

import {
	ActionsContainer,
	Container,
	RemoveButton
} from "./styles";

interface CoffeeCartCardProps {
	coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
	const { changeCartItemQuantity, removeCartItem } = useCart();

	const coffeeTotal = coffee.price * coffee.quantity;
	const formattedPrice = formatMoney(coffeeTotal);

	function handleIncrease() {
		changeCartItemQuantity(coffee.id, "increase");
	}

	function handleDecrease() {
		changeCartItemQuantity(coffee.id, "decrease");
	}

	function handleRemove() {
		removeCartItem(coffee.id);
	}

	return (
		<Container>
			<div>
				<img src={coffee.photo} alt="" />

				<div>
					<h1>{coffee.name}</h1>
					<ActionsContainer>
						<QuantityInput
							onIncrease={handleIncrease}
							onDecrease={handleDecrease}
							quantity={coffee.quantity}
							size="small"
						/>

						<RemoveButton onClick={handleRemove}>
							<Trash size={16} />
							REMOVER
						</RemoveButton>

					</ActionsContainer>
				</div>
			</div>

			<span>{formattedPrice}</span>
		</Container>
	);
}