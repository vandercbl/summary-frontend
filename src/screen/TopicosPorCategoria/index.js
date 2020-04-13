import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PageTopicosPorCategoria } from './styles'

import api from '../../services/api'

import Menu from '../../components/Menu'
import Header from '../../components/Header'

export default function TopicosPorCategoria(props){

	const { id } = props.match.params
	const [topicos, setTopicos] = useState([])
	const [categoria, setCategoria] = useState('')
	
	useEffect(() => {
		api.get(`categoria/${id}/topicos`).then(response => {
			setTopicos(response.data)
		})
	}, [id])

	useEffect(() => {
		api.get(`categorias/${id}`).then(response => {
			setCategoria(response.data)
		})
	}, [id])


	return(		
		<PageTopicosPorCategoria>
			<Menu />
			<Header>
				<span>Tópicos de</span>				
				<h1>{categoria.nome}</h1>
			</Header>
			<div className="container">
				<ul className="grid-items">					
					{topicos.map(topico => (
						<li key={topico.id}>
							
							<Link to={`/topicos/${topico.id}`}>Visualizar</Link>

							<strong>Título</strong>
							<p>{topico.titulo}</p>

							<strong>Descricao</strong>
							<p>{topico.descricao}</p>
						</li>
					))}
				</ul>
			</div>
		</PageTopicosPorCategoria>
	)
}