import { css } from 'styled-components'

const sizes = {
	desktopBig: 1800,
	desktop: 1200,
	tabletLandscape: 900,
	tabletPortrait: 600,
	// mobile: 500 não tem mobile, por ser mobile first
}

export default Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label]}px) {			
			${css(...args)};
		}
   `
	return acc
}, {})

/*
APLICAÇÃO NA ORDEM CORRETA DO MAIOR PARA O MENOR
	o mobile é sempre o default
	
	${({ theme }) => theme.tabletPortrait`
      background: orange;
   `}	
	
	${({ theme }) => theme.tabletLandscape`
      background: pink;
   `}

	${({ theme }) => theme.desktop`
      background: blue;
   `}

   ${({ theme }) => theme.desktopBig`
      background: red;
   `}

*/