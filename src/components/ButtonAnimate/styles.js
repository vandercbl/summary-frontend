import styled from 'styled-components'

const efeito = `cubic-bezier(0.4, 0, 0.2, 1)`;

export const ButtonAnimateStyle = styled.div`

	position: relative;
	display: inline-block;
	padding: 0.5em 2em;
	
	cursor: pointer;
	overflow: hidden;
	
	&:before,
	&:after {
		content: "";
		position: absolute;
		left: 0;
		
		height: ${props => props.p_borderWidth};
		width: 100%;
		
		background-color: ${props => props.p_color};
	}
	
	&:before {
		top: 0;
	}
	
	&:after {
		bottom: 0;
	}
	
	&:hover {
		
		& > * {
			
			& > * {
				
				&:before,
				&:after {
					transform: translate3d(0, 0, 0);
				}
				
				& > * {
					&:before,
					&:after {
						transform: translate3d(0, 0, 0);
					}
				}
			}
		}
	}
	
	& > * {
		
		&:before,
		&:after {
			content: "";
			position: absolute;
			top: 0;
			
			height: 100%;
			width: ${props => props.p_borderWidth};
			
			background-color: ${props => props.p_color};
		}
		
		&:before {
			left: 0;
		}
		
		&:after {
			right: 0;
		}
		
		& > * {
			
			&:before,
			&:after {
				content: "";
				position: absolute;
				left: 0;
				z-index: 9;
				
				height: ${props => props.p_borderWidth};
				width: 100%;
				
				background-color: ${props => props.p_hoverColor};
			}
			
			&:before {
				top: 0;
				
				transform: translate3d(-105%, 0, 0);
				transition: transform ${props => props.p_time} ${efeito};
			}
			
			&:after {
				bottom: 0;
				
				transform: translate3d(105%, 0, 0);
				transition: transform ${props => props.p_time} ${efeito};
			}
			
			& > * {
				
				&:before,
				&:after {
					content: "";
					position: absolute;
					top: 0;
					z-index: 9;
					
					height: 100%;
					width: ${props => props.p_borderWidth};
					
					background-color: ${props => props.p_hoverColor};
				}
				
				&:before {
					left: 0;
					
					transform: translate3d(0, 105%, 0);
					transition: transform ${props => props.p_time} ${efeito};
				}
				
				&:after {
					right: 0;
					
					transform: translate3d(0, -105%, 0);
					transition: transform ${props => props.p_time} ${efeito};
				}
			}
		}
	}

	div {
		background: none;
		border: none
	}

	.btn {
		/* @include btn-border-slide(#252525, #168dff, 2px, 0.8s); */
	}
`