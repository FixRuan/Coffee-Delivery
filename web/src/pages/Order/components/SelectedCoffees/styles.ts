import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 40rem;
	>h1{
		font-family: ${({ theme }) => theme.fonts.title};
		font-size: 1.125rem;
		color: ${({ theme }) => theme.colors.subtitle};
		font-weight: 700;
	}
`;

export const DetailsContainer = styled(SectionBaseStyle)`
	border-radius: 6px 44px 6px 44px;
	display: flex;
	flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	> div{
		display: flex;
		align-items: center;
		justify-content: space-between;

		span{
			font-size: 0.875rem;
			font-weight: 400;
			font-family: ${({ theme }) => theme.fonts.regular};
			color: ${({ theme }) => theme.colors.text};
		}

		p{
			font-size: 1rem;
			font-weight: 400;
			font-family: ${({ theme }) => theme.fonts.regular};
			color: ${({ theme }) => theme.colors.text};
		}

		strong{
			font-size: 1.25rem;
			font-weight: 700;
			font-family: ${({ theme }) => theme.fonts.regular};
			color: ${({ theme }) => theme.colors.subtitle};
		}
	}
`;