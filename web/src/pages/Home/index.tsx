import React from "react";
import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";
import { Container } from "./styles";



export function HomePage() {
	return (
		<Container>
			<Intro />
			<CoffeeList />
		</Container>
	);
}