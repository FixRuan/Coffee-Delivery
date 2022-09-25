import React, { ReactNode } from "react";

import {
	Container
} from "./styles";

interface SectionTitleProps {
	title: string;
	subtitle: string;
	icon: ReactNode;
}

export function SectionTitle({ title, icon, subtitle }: SectionTitleProps) {
	return (
		<Container>
			{icon}
			<div>
				<h3>{title}</h3>
				<span>{subtitle}</span>
			</div>
		</Container>
	);
}