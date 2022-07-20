import React from "react";
import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;


export function ConfirmationSection() {
	const { cartItemsTotal, cartQuantity } = useCart();
	const cartTotal = DELIVERY_PRICE + cartItemsTotal;

	const formattedItemsTotal = formatMoney(cartItemsTotal);
	const formattedCartTotal = formatMoney(cartTotal);
	const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

	return (
		<ConfirmationSectionContainer>
			<div>
				<span>Total de itens</span>
				<p>{formattedItemsTotal}</p>
			</div>

			<div>
				<span>Entrega</span>
				<p>{formattedDeliveryPrice}</p>
			</div>

			<div>
				<strong>Total</strong>
				<strong>{formattedCartTotal}</strong>
			</div>

			<Button text="confirmar pedido" disabled={cartQuantity <= 0} type="submit" />
		</ConfirmationSectionContainer>
	);
}