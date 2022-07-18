import { Trash } from "phosphor-react";
import React from "react";
import { QuantityInput } from "../../../../components/QuantityInput";

import {
	ActionsContainer,
	Container,
	RemoveButton
} from "./styles";

export function CoffeeCartCard() {
	return (
		<Container>
			<div>
				<img src="https://s3-alpha-sig.figma.com/img/0a3c/9586/9a75d3fa0ffdecc4bc46ca83d2342e1c?Expires=1659312000&Signature=cC028jb82huB8syq9-GNbyxgU2-ypDQHiFJF7lQsymO1Xx1sv7EFEcjhJDx-67iXb4nxb6C9jNINzKw6i3mNgWWxJkUzr~IxiSraAXLjoCnffV3PWhsZpYb4KTKlNnndYbvPt-hkRvLjvPBYg3~s9hq40FYgTILdpN1bwnadfZ-3k0h7K9H8KrMWfV2d9IV0MuRZbKEmLjpOtRdoOLM0MfabrLtcMYzSwXzfb9bcrrDOjulk0Y3bvc7SHHyfXynpOaU0XENCLDubQywnMnuGQeNUA2-rDjLG1vV6jGFsEQ4XCiIGaKdY9HtNtpbC7yRN5G2iaMD8KS93WR0rcHpAmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />


				<div>
					<h1>Latte</h1>
					<ActionsContainer>
						<QuantityInput size="small" />
						<RemoveButton>
							<Trash size={16} />
							REMOVER
						</RemoveButton>
					</ActionsContainer>
				</div>
			</div>

			<span>R$ 9,90</span>
		</Container>
	);
}