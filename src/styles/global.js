import { createGlobalStyle } from 'styled-components'

const GlobalStyle =  createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		font: 400 16px Roboto, sans-serif;
		background: #EFF3F6;
		color: #1C252C;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;	
		color: #333;
	}

	html, body, #root {
		height: 100%;
	}

	form {
		margin: 26px auto 0;
		max-width: 600px;

		.inputs-group {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: 10px 20px;
			align-items: baseline;

			label {
				font-size: 1.1rem;
				font-weight: 300;
				color: #333333dd;
			}

			${({ theme }) => theme.tabletLandscape`
				grid-template-columns: auto 1fr;
			`}

		}

		input, button, textarea, select {
			font: 400 1.1rem Roboto, sans-serif;
			color: #333333dd;
		}

		input[type="text"],
		input[type="date"],
		input[type="number"],
		select,
		textarea {
			border: 1px solid #ddd;
			padding: 12px 16px;
			border-radius: 10px;
		}

		textarea {
			resize: vertical;
			min-height: 90px;
		}

		button {
			cursor: pointer;		
		}

		button[type="submit"] {
			background: ${({ theme }) => theme.primaryColor};
			color: #fff;
			padding: 8px 16px;
			border: 0;
			border-radius: 10px;
			transition: all 0.3s;
			font-weight: 300;
			margin: 20px 0 0 auto;
			display: block;

			&:hover {
				background: ${({ theme }) => theme.secundaryColor};
			}
		}

	}


	.container {
		width: 95%;
		max-width: 900px;
		margin: 0 auto;
	}

	.box-page {
		background: #fff;
		padding: 26px 26px 26px 26px;
		margin-top: 16px;
		margin-bottom: 16px;
		border-radius: 16px;
		box-shadow: 0px 0px 5px 0px #ccccccaa;
	}
`

export default GlobalStyle