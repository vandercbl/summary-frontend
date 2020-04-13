import React, { Fragment } from 'react'

//import Helmet from 'react-helmet' // permite alteração do header da aplicação
// o Helmet está exibindo uma mensagem de warining sobre ciclo de vida, por isso, deixei comentado até parar para pesquisar e entender melhor a questão

import GlobalStyle from './styles/global' // importação dos estilos globais

import Routes from './routes'

function App() {

	return (
		<Fragment>

			{/* <Helmet>
				<title>Resumo - Aplicação de ajuda e consulta rápida</title>
				<meta name="theme-color" content="#FF0000"/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet"></link>
			</Helmet> */}

			<GlobalStyle />
			<Routes />

		</Fragment>
	)
}

export default App
