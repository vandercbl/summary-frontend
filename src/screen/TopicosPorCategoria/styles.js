import styled from 'styled-components'

export const PageTopicosPorCategoria = styled.div`
	.grid-items {
		display: grid;
		grid-gap: 16px;
		grid-template-columns: 1fr;
		margin: 16px 0;

		${({ theme }) => theme.tabletPortrait`
			grid-template-columns: 1fr 1fr;
		`}

		${({ theme }) => theme.desktop`
			grid-template-columns: 1fr 1fr 1fr;
		`}

		li {
			background: #fff;
			border-radius: 5px;
			padding: 16px 20px;
			list-style: none;
			box-shadow: 0px 0px 2px 0px #ccccccaa;

			strong {
				font-size: 0.7rem;
				color: #999;
				font-weight: 300;
				text-transform: uppercase;
			}

			p {
				font-size: 1.2rem;
				margin-top: 2px;

				&.p2 {
					font-size: 1rem;
				}
			}

			p + strong {
				margin-top: 22px;
				display: block;
			}
		}
	}
`