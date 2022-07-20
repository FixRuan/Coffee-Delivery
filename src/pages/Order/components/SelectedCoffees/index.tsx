import React from "react";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

import {
	Container, DetailsContainer
} from "./styles";

export function SelectedCoffees() {
	const { cartItems } = useCart();

	return (
		<Container>
			<h1>Cafés selecionados</h1>
			<DetailsContainer>
				{cartItems.map(item => (
					<CoffeeCartCard key={item.id} coffee={item} />
				))}

				<ConfirmationSection />
			</DetailsContainer>
		</Container>
	);
}