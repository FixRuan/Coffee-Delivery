import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button{
        font-family: ${({ theme }) => theme.fonts.regular};
        font-weight: 400;
        font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		input[type=number] {
			-moz-appearance: textfield;
		}
`;