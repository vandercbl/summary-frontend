import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PageEdicaoCategoria } from './styles'

import api from '../../services/api'

import Menu from '../../components/Menu'
import Header from '../../components/Header'

export default function EdicaoCategoria(props){

	const { id } = props.match.params
	
	const [nome, setNome] = useState('')
	const [descricao, setDescricao] = useState('')

	useEffect(() => {
		async function loadCategoria(){
			const result = await api.get(`categorias/${id}`)
			setNome(result.data.nome)
			setDescricao(result.data.descricao)
		}

		loadCategoria()

	}, [id])

	async function handleSubmit(e){
		e.preventDefault()
		
		const data = {nome, descricao}

		try{
			await api.put(`categorias/${id}/update`, data)
			alert('Edição realizada com sucesso')
		}catch(err){
			alert(`Falha na edição. Erro: ${err}`)
		}
	}

	return(
		<PageEdicaoCategoria>
			<Menu />
			<Header>
				<Link to="/categorias">Categorias</Link>
				<h1>Edição de Categoria</h1>
			</Header>

			<div className="container box-page">
				<p>Edite os campos abaixo para alterar a categoria.</p>
				<form onSubmit={handleSubmit}>
					<div className="inputs-group">
						<label htmlFor="nome">Nome</label>
						<input type="text" id="nome"
							value={nome}
							onChange={e => setNome(e.target.value)}
						/>
						<label htmlFor="descricao">Descrição</label>
						<input type="text" id="descricao" 
							value={descricao}
							onChange={e => setDescricao(e.target.value)}
						/>
					</div>
					<button type="submit">Alterar</button>
				</form>
			</div>


		</PageEdicaoCategoria>
	)
}