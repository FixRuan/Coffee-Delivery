import React from "react";
import { CoffeeCard } from "../../../../components/CoffeeCard";
import { coffees } from "../../../../data/coffees";

import {
	Coffees,
	Container
} from "./styles";

export function CoffeeList() {
	return (
		<Container className="container">
			<h1>Nossos cafés</h1>

			<Coffees>
				{coffees.map(coffee =>
					<CoffeeCard
						key={coffee.id}
						name={coffee.name}
						description={coffee.description}
						image={coffee.photo}
						price={coffee.price}
						tags={coffee.tags}
					/>
				)}
			</Coffees>
		</Container>
	);
}