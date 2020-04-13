import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// BrowserRouter basicamente as rotas tem que estar dentro dele
// Route são as rotdas de fato
// Switch vai garantir que apenas uma rota seja executada por momento

import Home from './screen/Home'
import Categorias from './screen/Categorias'
import NovaCategoria from './screen/NovaCategoria'
import EdicaoCategoria from './screen/EdicaoCategoria'
import Topicos from './screen/Topicos'
import NovoTopico from './screen/NovoTopico'
import EdicaoTopico from './screen/EdicaoTopico'
import TopicoDetalhe from './screen/TopicoDetalhe'
import TopicosPorCategoria from './screen/TopicosPorCategoria'
import Teste from './screen/Teste'
// importar as páginas que desejo

export default function Routes(){
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>

				<Route exact path="/categorias" component={Categorias}></Route>
				<Route exact path="/categorias/:id/edicao" component={EdicaoCategoria}></Route>
				<Route exact path="/categorias/nova" component={NovaCategoria}></Route>
				
				<Route exact path="/topicos" component={Topicos}></Route>
				<Route exact path="/topicos/novo" component={NovoTopico}></Route>
				<Route exact path="/topicos/:id/edicao" component={EdicaoTopico}></Route>
				<Route exact path="/topicos/:id" component={TopicoDetalhe}></Route>
				<Route exact path="/categoria/:id/topicos" component={TopicosPorCategoria}></Route>
				
				<Route exact path="/teste" component={Teste}></Route>
			</Switch>			
		</BrowserRouter>
	)
}

// no Route o path é o caminho da rota. E component é componente que será executado
// o exact é pq react-router-dom ele procura pela primeira rota que tenha pelo menos o início do path,
// e como todas as rotas começam com "/" ele vai sempre cair na primeira, e o exact impede que isso aconteça
