import React from "react";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
	Container,
	HeaderButton,
} from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {

	return (
		<Container>
			<div className="container">
				<img src={logo} alt="Logo da Coffee Delivery" />

				<nav>
					<HeaderButton variant="purple">
						<MapPin size={20} weight="fill" />
						Goioerê, PR
					</HeaderButton>

					<HeaderButton variant="yellow">
						<ShoppingCart size={20} weight="fill" />
					</HeaderButton>
				</nav>
			</div>
		</Container>
	);
}