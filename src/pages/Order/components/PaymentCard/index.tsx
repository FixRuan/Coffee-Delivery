import React from "react";
import { CreditCard } from "phosphor-react";

import {
	Container
} from "./styles";

export function PaymentCard() {
	return (
		<Container>
			<CreditCard size={16} />
			Cartão de crédito
		</Container>
	);
}