import React from "react";
import { CoffeeCard } from "../../../../components/CoffeeCard";

import {
	Coffees,
	Container
} from "./styles";

export function CoffeeList() {
	return (
		<Container className="container">
			<h1>Nossos cafés</h1>

			<Coffees>
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
			</Coffees>
		</Container>
	);
}