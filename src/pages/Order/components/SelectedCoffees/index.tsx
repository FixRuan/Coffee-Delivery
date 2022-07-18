import React from "react";
import { CoffeeCartCard } from "../CoffeeCartCard";

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
			</DetailsContainer>
		</Container>
	);
}