import styled from 'styled-components'

export const PageTopicos = styled.div`

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
			padding: 16px 20px 40px 20px;
			list-style: none;
			box-shadow: 0px 0px 2px 0px #ccccccaa;
			position: relative;

			strong {
				font-size: 0.7rem;
				color: #999;
				font-weight: 300;
				text-transform: uppercase;
			}

			> p {
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

		.box-actions {
			background: ${({ theme }) => theme.secundaryColor};
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			border-radius: 0px 0px 5px 5px;
			padding: 5px 15px;
			font-size: 0.9rem;
			color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;

			a {
				color: #ffffffbb;
				text-decoration: none;
				display: flex;
				align-items: center;
				transition: all 0.3s;
				margin-right: 10px;
				
				svg {
					margin-right: 5px;
				}

				&:hover {
					color: #fff;
				}
			}

			.alter-icons {
				display: flex;
				align-items: baseline;
			}

			button {
				background: none;
				border: 0;
				padding: 0;
				color: #ffffffbb;
				cursor: pointer;
				transition: all 0.3s;

				&:hover {
					color: #fff;
				}
			}
		}

		.info-complement {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 0.8rem;
			margin-top: 14px;
			padding-top: 14px;
			border-top: 1px dashed ${({ theme }) => theme.secundaryColor+'33'};

			.highlight {
				background: ${({ theme }) => theme.primaryColor+'88'};
				color: #fff;
				padding: 5px 10px;
				border-radius: 10px;
			}

			span {
				color: #999;
				font-weight: 400;
				text-transform: uppercase;
				font-size: 0.6rem;
			}
		}

	}
`