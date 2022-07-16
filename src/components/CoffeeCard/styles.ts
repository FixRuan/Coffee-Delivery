import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.card};
	border-radius: 6px 36px 6px 36px;
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 0;
	text-align: center;

	img{
		width: 7.5rem;
		height: 7.5rem;
		margin-top: -1.25rem;
	}
`;

export const Tags = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	margin-top: 1rem;
	margin-bottom: 1.25rem;
	flex-wrap: wrap;

	span{
		background: ${({ theme }) => theme.colors["brand-yellow-light"]};
		color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
		font-size: 0.625rem;
		text-transform: uppercase;
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		font-weight: 700;
	}
`;

export const Name = styled.span`
	margin-bottom: 0.5rem;
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 1.625rem;
	color: ${({ theme }) => theme.colors.subtitle};
	font-family: ${({ theme }) => theme.fonts.title};
	text-align: center;
`;

export const Description = styled.span`
	font-weight: 400;
	font-size: 0.875rem;
	line-height: 1.1375rem;
	color: ${({ theme }) => theme.colors.label};
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.regular};
	margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> div{
		display: flex;
		align-items: center;
		gap: 3px;
	}

	div > span{
		font-size: 0.875rem;
		font-weight: 400;
		font-family: ${({ theme }) => theme.fonts.regular};
		color: ${({ theme }) => theme.colors.text};
	}

	div > h2{
		font-size: 1,5rem;
		font-weight: 800;
		font-family: ${({ theme }) => theme.fonts.title};
		color: ${({ theme }) => theme.colors.text};
		line-height: 1.1375rem;
	}
`;

export const AddCartWrapper = styled.div`
	width: 7.5rem;

	> button {
		width: 2.375rem;
		height: 2.375rem;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors["brand-purple-dark"]};
		color: ${({ theme }) => theme.colors.card};
		border-radius: 6px;
		margin-left: 0.3rem;
		transition: 0.4s;

		&:hover{
			background-color: ${({ theme }) => theme.colors["brand-purple"]};
		}
	}
`;