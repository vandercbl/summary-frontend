import styled from 'styled-components'
import bgHome from '../../assets/bg-home.jpg'

export const PageHome = styled.div`
	height: 100vh;
	background: url(${bgHome}) bottom center no-repeat;
	background-size: cover;

	main.container {
		height: 80vh;
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
	}

	a {
		color: ${({ theme }) => theme.primaryColor};
		text-decoration: none;
		font-size: 1.4rem;
		font-weight: 100;
		transition: color 0.6s;
		text-align: center;


		&:hover {
			color: #ffffffcc;
		}

		span.content {
			display: grid;
			grid-template-columns: auto auto;
			justify-content: center;
			align-items: center;
			grid-gap: 0 10px;
		}

		div {
			padding: 0.5em 1em;
		}

		${({ theme }) => theme.tabletPortrait`
			font-size: 1.75rem;

			div {
				padding: 0.5em 2em;
			}
		`}

	}
`