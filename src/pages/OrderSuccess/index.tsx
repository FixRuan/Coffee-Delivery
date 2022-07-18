import React from "react";
import IllustrationImg from "../../assets/Illustration.png";
import { MapPin, Clock, CurrencyDollar, } from "phosphor-react";

import {
	Container, OrderDetailsContainer, RegularText, Strong
} from "./styles";
import { InfoCard } from "../../components/Info";
import { useTheme } from "styled-components";

export function OrderSuccessPage() {
	const { colors } = useTheme();


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
								<Strong>Rua João Daniel Martinelli, 102</Strong>
								<br />
								Farrapos - Porto Alegre, RS
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
								<Strong>Cartão de Crédito</Strong>
							</RegularText>
						}
					/>
				</OrderDetailsContainer>

				<img src={IllustrationImg} alt="" />
			</section>
		</Container>
	);
}