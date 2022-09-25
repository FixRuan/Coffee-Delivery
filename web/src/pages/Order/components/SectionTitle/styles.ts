import styled from "styled-components";


export const Container = styled.div`
	display: flex;
	gap: 0.5rem;

	div h3{
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.25rem;
		font-family: ${({ theme }) => theme.fonts.regular};
		color: ${({ theme }) => theme.colors.subtitle};
	}

	div span{
		font-weight: 400;
		font-family: ${({ theme }) => theme.fonts.regular};
		color: ${({ theme }) => theme.colors.text};
		font-size: 0.875rem;
		line-height: 1.125rem;
	}
`;