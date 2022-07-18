import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	margin-top: 5rem;

	>div{
		h1{
			font-weight: 800;
			font-family: ${({ theme }) => theme.fonts.title};
			font-size: 2rem;
			color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
		}
		span{
			font-weight: 400;
			font-family: ${({ theme }) => theme.fonts.regular};
			font-size: 1.25rem;
			color: ${({ theme }) => theme.colors.subtitle};
		}
	}

	>section{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const OrderDetailsContainer = styled.div`
	padding: 2.5rem;
	border-radius: 6px 36px 6px 36px;
	background: ${({ theme }) => theme.colors.background};
	min-width: 32rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	position: relative;

	&::before{
		content: "";
		position: absolute;
		inset: -1px;
		z-index: -1;
		border-radius: 7px 37px 7px 37px;
		background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);;
	}
`;

export const RegularText = styled.span`
	font-weight: 400;
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text}
`;

export const Strong = styled.strong`
	font-weight: 700;
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text}
`;