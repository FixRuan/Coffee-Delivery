/* eslint-disable react/display-name */
import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import {
	Container, ContentContainer
} from "./styles";

interface PaymentCardProps extends InputHTMLAttributes<HTMLInputElement> {
	icon: ReactNode
	label: string
	key: string
	value: string
}

export const PaymentCard = forwardRef<HTMLInputElement, PaymentCardProps>((
	{ id, icon, label, ...props }, ref) => {
	return (
		<Container>
			<input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
			<label htmlFor={id}>
				<ContentContainer>
					{icon}
					{label}
				</ContentContainer>
			</label>
		</Container>
	);
});