import React from "react";
import { SectionTitle } from "../SectionTitle";
import { MapPinLine } from "phosphor-react";

import {
	Container, FormSectionContainer
} from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";

export function OrderForm() {
	const { colors } = useTheme();

	return (
		<Container>
			<h1>Complete seu pedido</h1>

			<FormSectionContainer>
				<SectionTitle
					icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
					title="Endereço de Entrega"
					subtitle="Informe o endereço onde deseja receber seu pedido"
				/>

				<AddressForm />
			</FormSectionContainer>
		</Container>
	);
}