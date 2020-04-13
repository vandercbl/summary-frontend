import React from 'react'
import { ThemeProvider } from 'styled-components'
import media from './media-queries'

const Theme = ({ children }) => (
	<ThemeProvider
		theme={{
			primaryColor: '#4192A7',
			secundaryColor: '#4078a5',
			altColor: '#494D5A',
			...media
		}}>
		{children}
	</ThemeProvider>
)

export default Theme

/*
APLICAÇÃO DO TEMA
background: ${({ theme }) => theme.primaryColor};
*/ 