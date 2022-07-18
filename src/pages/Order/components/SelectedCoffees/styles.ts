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