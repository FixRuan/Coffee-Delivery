import React from "react";
import { PaymentCard } from "../PaymentCard";
import { PaymentContainer } from "./styles";



export function Payment() {
	return (
		<PaymentContainer>
			<PaymentCard />
			<PaymentCard />
			<PaymentCard />
		</PaymentContainer>
	);
}