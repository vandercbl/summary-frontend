import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import { PageTopicoDetalhe } from './styles'

import api from '../../services/api'

import Menu from '../../components/Menu'
import Header from '../../components/Header'

export default function TopicoDetalhe(props){

	const id = props.match.params.id
	
	const [topico, setTopico] = useState('')
	
	useEffect(() => {
		async function loadTopico(){
			const result = await api.get(`topicos/${id}`)
			setTopico(result.data)
		}
		loadTopico()
		
	}, [id])

	return(
		<PageTopicoDetalhe>
			<Menu />
			<Header>
				<Link to="/topicos">Tópicos</Link>
				<h1>{topico.titulo}</h1>
			</Header>

			<div className="container box-page">
			<p>titulo</p>
			{topico.titulo}
			<br/><br/>
			<p>descricao</p>
			{topico.descricao}
			<br/><br/>
			<p>Conteúdo</p>
			{topico.exemplo}
			<br/><br/>

			<p>aplicacao_code</p>
			<pre>
				<code>
					{topico.aplicacao_code}
				</code>
			</pre>
			
			<br/><br/>
			<p>videos</p>
			{topico.videos}
			<br/><br/>
			<p>data_criacao</p>
			{topico.data_criacao}
			<br/><br/>
			<p>categoria_nome</p>
			{topico.categoria_nome}
			<br/><br/>
			</div>

		</PageTopicoDetalhe>
	)
}