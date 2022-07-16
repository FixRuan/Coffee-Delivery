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

export function CoffeeCard() {
	return (
		<Container>
			<img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1658707200&Signature=cxBGYSahhlQGO89Bvl0kj03Oi0XyZACc3ElnrLQDnACQOXzU-InjO-piErfG2d65XDgEY-d739~6m4fUoOARRb-0ObTGI8uSlFMglw-bUH3iOE9d8dHcdAlxYDyyhO~HHMX29-1ZP1Xh4vh2Z6NYDy9x2f8iCOeFNw25dPSMUDlsar6qR5RPZC2Ltl6LQqVTQ5jdH9VSy6zMcP9iYLi6r13S0cHePEhXeq14~lm22obID~QnIMQM9~UQu9gIetLh-XQOMOrwRF6gN3Z63YqsreWhFqb~otz4ltMpzKAHMYNYWNa01klWw1XuCBxeY-v5SByFVwt-MkYL3iXDyTEBEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />

			<Tags>
				<span>Tradicional</span>
				<span>Com leite</span>
			</Tags>

			<Name>Expresso Tradicional</Name>
			<Description>
				O tradicional café feito com água quente e grãos moídos
			</Description>

			<CardFooter>
				<div>
					<span>R$</span>
					<h2>9,90</h2>
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