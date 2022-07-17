import styled from "styled-components";

export const InputStyleContainer = styled.input`
	height: 2.625rem;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.button};
	background-color: ${({ theme }) => theme.colors.input};
	transition: 0.4s;
	color: ${({ theme }) => theme.colors.text};
	font-size: 0.75rem;
	padding: 0 0.75rem;

	&::placeholder {
		color: ${({ theme }) => theme.colors.label};
	}

	&:focus{
		border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
	}
`;