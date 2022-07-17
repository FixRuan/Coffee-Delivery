import React from "react";
import { OrderForm } from "./components/OrderForm";
import { Container } from "./styles";


export function OrderPage() {
	return (
		<Container className="container">
			<OrderForm />

		</Container>
	);
}