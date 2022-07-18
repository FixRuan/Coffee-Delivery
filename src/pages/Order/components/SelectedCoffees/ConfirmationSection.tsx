import React from "react";
import { Button } from "../../../../components/Button";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
	return (
		<ConfirmationSectionContainer>
			<div>
				<span>Total de itens</span>
				<p>R$ 9,90</p>
			</div>

			<div>
				<span>Entrega</span>
				<p>R$ 3,90</p>
			</div>

			<div>
				<strong>Total</strong>
				<strong>R$ 13,80</strong>
			</div>

			<Button text="confirmar pedido" />
		</ConfirmationSectionContainer>
	);
}