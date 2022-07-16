import React, { ReactNode } from "react";

import {
	Container,
	InfoWithIconContainer
} from "./styles";

interface InfoCardProps {
	icon: ReactNode;
	text: string | ReactNode;
	iconBg: string;
}

export function InfoCard({ icon, iconBg, text }: InfoCardProps) {
	return (
		<InfoWithIconContainer>
			<Container iconBg={iconBg}>{icon}</Container>
			{typeof text === "string" ? <p>{text}</p> : text}
		</InfoWithIconContainer>
	);
}