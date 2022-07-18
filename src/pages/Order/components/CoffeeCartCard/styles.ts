import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	border-bottom: 1px solid ${({ theme }) => theme.colors.button};
	padding-bottom: 1.5rem;
	margin-bottom: 1.5rem;

	>div {
		display: flex;
		align-items: center;
		gap: 1.25rem;

		img {
			width: 4rem;
			height: 4rem;	
		}
	} 

	>span{
		align-self: flex-start;
		font-size: 1rem;
		font-weight: 700;
		font-family: ${({ theme }) => theme.fonts.regular};
		color: ${({ theme }) => theme.colors.text};
	}

	>div >div h1{
		font-size: 1rem;
		font-weight: 400;
		font-family: ${({ theme }) => theme.fonts.regular};
		color: ${({ theme }) => theme.colors.subtitle};
	}
`;

export const ActionsContainer = styled.div`
	margin-top: 0.5rem;
	height: 2rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	> div{
		max-width: 4.5rem;
		height: 100%;
	}
`;

export const RemoveButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	color: ${({ theme }) => theme.colors.text};
	font-size: 0.75rem;
	height: 100%;
	border: none;
	background: ${({ theme }) => theme.colors.button};
	padding: 0 0.5rem;
	border-radius: 6px;
	transition: 0.4s;

	svg{
		color: ${({ theme }) => theme.colors["brand-purple"]};
	}

	&:hover{
		background: ${({ theme }) => theme.colors.hover};
	}
`;