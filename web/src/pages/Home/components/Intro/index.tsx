import React from "react";

import {
	BenefitsContainer,
	Container,
	IntroContent,
} from "./styles";

import introImg from "../../../../assets/intro-img.png";
import { InfoCard } from "../../../../components/Info";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
	const { colors } = useTheme();

	return (
		<Container>
			<IntroContent className="container">
				<div>
					<section>
						<h1>Encontre o café perfeito para qualquer hora do dia</h1>
						<h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
					</section>

					<BenefitsContainer>
						<InfoCard
							iconBg={colors["brand-yellow-dark"]}
							icon={<ShoppingCart weight="fill" />}
							text={"Compra simples e segura"}
						/>

						<InfoCard
							iconBg={colors.text}
							icon={<Package weight="fill" />}
							text={"Embalagem mantém o café intacto"}
						/>

						<InfoCard
							iconBg={colors["brand-yellow"]}
							icon={<Timer weight="fill" />}
							text={"Entrega rápida e rastreável"}
						/>

						<InfoCard
							iconBg={colors["brand-purple"]}
							icon={<Coffee weight="fill" />}
							text={"O café chega fresquinho até você"}
						/>
					</BenefitsContainer>
				</div>

				<img src={introImg} alt="" />
			</IntroContent>
		</Container>
	);
}