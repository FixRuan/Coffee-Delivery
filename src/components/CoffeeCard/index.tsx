import React from "react";
import { QuantityInput } from "../QuantityInput";
import { ShoppingCart } from "phosphor-react";

import {
	Container,
	Tags,
	Name,
	Description,
	CardFooter,
	AddCartWrapper
} from "./styles";

interface CoffeeCardProps {
	image: any;
	name: string;
	tags: string[];
	description: string;
	price: number;
}

export function CoffeeCard({ name, description, image, price, tags }: CoffeeCardProps) {
	return (
		<Container>
			<img src={image} alt="" />

			<Tags>
				{tags.map(tag => <span key={tag}>{tag}</span>)}
			</Tags>

			<Name>{name}</Name>
			<Description>{description}</Description>

			<CardFooter>
				<div>
					<span>R$</span>
					<h2>{price}</h2>
				</div>

				<AddCartWrapper>
					<QuantityInput />

					<button>
						<ShoppingCart size={22} weight="fill" />
					</button>
				</AddCartWrapper>
			</CardFooter>
		</Container>
	);
}