import styled from 'styled-components'

export const CompoMenu = styled.nav`
	
	background: ${({theme}) => theme.altColor};
	font-size: 1.1rem;
	padding: 22px 16px;

	a {
		color: #E8EFF6aa;
		padding: 0 5px;
		text-decoration: none;
		margin: 0 10px;
		transition: color 0.3s;
		display: inline-block;

		&:after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			margin: 6px auto 0 auto;
			background: ${({theme}) => theme.primaryColor};
			transition: all 0.3s;
		}

		&:hover,
		&.active {
			color: #fff;
		}

		&:hover::after,
		&.active::after {
			content: '';
			width: 50%;
			box-shadow: 0px 0px 4px 1px ${({theme}) => theme.primaryColor};;
		}

	}
`