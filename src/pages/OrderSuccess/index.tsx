/* eslint-disable indent */
import React, { useEffect } from "react";
import IllustrationImg from "../../assets/Illustration.png";
import { MapPin, Clock, CurrencyDollar, } from "phosphor-react";

import {
	Container, OrderDetailsContainer, RegularText, Strong
} from "./styles";
import { InfoCard } from "../../components/Info";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData, PaymentMethod } from "../Order";
import { paymentMethods } from "../Order/components/OrderForm/Payment";

interface ParamsType {
	state: OrderData;
}

export function OrderSuccessPage() {
	const { colors } = useTheme();

	const { state } = useLocation() as unknown as ParamsType;
	const navigate = useNavigate();

	useEffect(() => {
		if (!state) {
			navigate("/");
		}
	}, []);

	if (!state) return <></>;


	return (
		<Container className="container">
			<div>
				<h1>Uhu! Pedido confirmado</h1>
				<span>Agora é só aguardar que logo o café chegará até você</span>
			</div>

			<section>
				<OrderDetailsContainer>
					<InfoCard
						icon={<MapPin weight="fill" />}
						iconBg={colors["brand-purple"]}
						text={
							<RegularText>
								Entrega em
								<Strong> {state.street}, {state.number}</Strong>
								<br />
								{state.neighborhood} - {state.city}, {state.uf}
							</RegularText>
						}
					/>

					<InfoCard
						icon={<Clock weight="fill" />}
						iconBg={colors["brand-yellow"]}
						text={
							<RegularText>
								Previsão de entrega <br />
								<Strong>20 min - 30 min</Strong>
							</RegularText>
						}
					/>

					<InfoCard
						icon={<CurrencyDollar weight="fill" />}
						iconBg={colors["brand-yellow-dark"]}
						text={
							<RegularText>
								Pagamento na entrega <br />
								<Strong>{paymentMethods[state.paymentMethod].label}</Strong>
							</RegularText>
						}
					/>
				</OrderDetailsContainer>

				<img src={IllustrationImg} alt="" />
			</section>
		</Container>
	);
}