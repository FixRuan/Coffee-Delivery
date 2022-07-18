import React from "react";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

import {
	Container, DetailsContainer
} from "./styles";

export function SelectedCoffees() {
	return (
		<Container>
			<h1>Cafés selecionados</h1>
			<DetailsContainer>
				<CoffeeCartCard />
				<CoffeeCartCard />

				<ConfirmationSection />
			</DetailsContainer>
		</Container>
	);
}