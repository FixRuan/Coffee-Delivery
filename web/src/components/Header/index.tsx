import React from "react";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
	Container,
	HeaderButton,
} from "./styles";

import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {

	const { cartQuantity } = useCart();

	return (
		<Container>
			<div className="container">
				<NavLink to="/" >
					<img src={logo} alt="Logo da Coffee Delivery" />
				</NavLink>

				<nav>
					<HeaderButton variant="purple">
						<MapPin size={20} weight="fill" />
						Goioerê, PR
					</HeaderButton>

					<NavLink to="/order" >
						<HeaderButton variant="yellow">
							{cartQuantity >= 1 && <span>{cartQuantity}</span>}
							<ShoppingCart size={20} weight="fill" />
						</HeaderButton>
					</NavLink>
				</nav>
			</div>
		</Container>
	);
}