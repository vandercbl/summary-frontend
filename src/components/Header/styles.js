import styled from 'styled-components'

export const CompoHeader = styled.header`
	background: #fff;
	padding: 16px 0;

	> .container {
		display: flex;
		align-items: center;

		a {
			margin-right: 10px;
			font-size: 0.9rem;
			text-decoration: none;
			color: #ccc;
			transition: color 0.3s;
			border-right: 1px solid #ccc;
			padding-right: 10px;

			&:hover {
				color: ${({theme}) => theme.primaryColor};
			}
		}
	}

	span {
		font-size: 0.9rem;
		font-weight: 400;
		margin-right: 5px;
	}

	h1 {
		font-size: 1.4rem;
	}

`