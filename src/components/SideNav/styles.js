import styled from 'styled-components'

export const CompoSideNav = styled.div`
	background: ${({ theme }) => theme.primaryColor};
	color: #ffffffee;
	padding: 8px 4px;

	> .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		color: #ffffffbb;
		font-size: 0.9rem;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		transition: all 0.3s;

		svg {
			font-size: 1.2rem;
			margin-right: 4px;
		}

		&:hover {
			color: #ffffff;
		}
	}

	input {
		background: #ffffffaa;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
		width: 50px;
		transition: all 0.3s;		

		&:focus {
			width: 200px;
			background: #ffffdd;
		}
	}
`