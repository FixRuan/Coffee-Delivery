import styled from "styled-components";
import bannerBackground from "../../../../assets/banner-background.png";

export const Container = styled.section`
	width: 100%;
	height: 35.6rem;
	background: ${() => `url(${bannerBackground}) no-repeat center`};
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;


export const IntroContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3.5rem;

	section h1{
		font-size: 3rem;
		font-family: ${({ theme }) => theme.fonts.title};
		font-weight: bold;
		line-height: 3.5rem;
		color: ${({ theme }) => theme.colors.title};
	}

	section h3{
		color: ${({ theme }) => theme.colors.subtitle};
		font-size: 1.25rem;
		margin-top: 1rem;
		font-weight: 400;
	}
`;

export const BenefitsContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	row-gap: 1.25rem;
	margin-top: 4.125rem;
`;