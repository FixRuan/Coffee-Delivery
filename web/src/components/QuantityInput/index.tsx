import { Minus, Plus } from "phosphor-react";
import React from "react";

import {
	Container, IconWrapper
} from "./styles";

interface QuantityInputProps {
	size?: "small" | "medium";
	quantity: number;
	onIncrease?: () => void;
	onDecrease?: () => void;
}

export function QuantityInput({ size = "medium", onDecrease, onIncrease, quantity }: QuantityInputProps) {
	return (
		<Container size={size}>
			<IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
				<Minus size={14} weight="fill" />
			</IconWrapper>

			<input type="number" readOnly value={quantity} />

			<IconWrapper onClick={onIncrease}>
				<Plus size={14} weight="fill" />
			</IconWrapper>
		</Container>
	);
}