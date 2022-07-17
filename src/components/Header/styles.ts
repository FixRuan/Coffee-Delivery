import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 6.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 10;
	background: ${({ theme }) => theme.colors.background};

	> div{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	nav{
		display: flex;
		gap: 0.75rem;
	}
`;

interface HeaderButtonProps {
	variant: "yellow" | "purple";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	min-width: 2.3rem;
	height: 2.3rem;
	border-radius: 6px;
	border: none;
	padding: 0 0.5rem;
	position: relative;
	font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

	${({ variant, theme }) => css`
		background-color: ${theme.colors[`brand-${variant}-light`]};
		color: ${theme.colors[`brand-${variant}-dark`]};
	`}

	${({ variant, theme }) => variant === "purple" && css`
		svg{
			color: ${theme.colors["brand-purple"]};
		}
	`}
`;