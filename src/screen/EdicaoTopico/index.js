import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PageEdicaoTopico } from './styles'

import api from '../../services/api'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

export default function EdicaoTopico(props){
	//const {match} = props //pega path, url e params
	const id = props.match.params.id

	const [categoria_id, setCategoriaId] = useState('')
	const [titulo, setTitulo] = useState('')
	const [descricao, setDescricao] = useState('')
	const [exemplo, setExemplo] = useState('')
	const [aplicacao_code, setAplicacaoCode] = useState('')
	const [videos, setVideos] = useState('')

	const [categorias, setCategorias] = useState([])

	useEffect(() => {
		async function loadTopico(){
			const result = await api.get(`topicos/${id}`)

			setCategoriaId(result.data.categoria_id)
			setTitulo(result.data.titulo)
			setDescricao(result.data.descricao)
			setExemplo(result.data.exemplo)
			setAplicacaoCode(result.data.aplicacao_code)
			setVideos(result.data.videos)
		}

		async function loadCategorias(){
			const listCategorias = await api.get('categorias?pagina=1&limite=1000')
			setCategorias(listCategorias.data)
		}

		loadTopico()
		loadCategorias()
		
	}, [id])

	async function handleSubmit(e){
		e.preventDefault()
		
		const data = {
			categoria_id,
			titulo,
			descricao,
			exemplo,
			aplicacao_code,
			videos			
		}

		try {
			await api.put(`topicos/${id}/update`, data)
			alert('Edição realizada com sucesso')
		} catch(err) {
			alert(`Falha na edição dos dados. Erro: ${err}`)
		}
	}

	return(
		<PageEdicaoTopico>
			<Menu />
			<Header>
				<Link to="/topicos">Tópicos</Link>
				<h1>Edição de Tópico</h1>
			</Header>

			<div className="container box-page">
			<p>Edite os dados abaixo para alterar o tópico.</p>
				<form onSubmit={handleSubmit}>
					<div className="inputs-group">
						<input type="hidden" id="id" 
							value={id}
						/>

						<label htmlFor="categoria_id">Categoria</label>
						<select id="categoria_nome" 
							value={categoria_id}
							onChange={e => setCategoriaId(e.target.value)}>
							
							{categorias.map(categoria => (
								<option value={categoria.id} key={categoria.id}>{categoria.nome}</option>
							))}

						</select>

						<label htmlFor="titulo">Título</label>
						<input type="text" id="titulo" required	
							value={titulo}
							onChange={e => setTitulo(e.target.value)}
						/>
						
						<label htmlFor="descricao">Descrição</label>
						<input type="text" id="descricao"	
							value={descricao}
							onChange={e => setDescricao(e.target.value)}
						/>
						
						<label htmlFor="exemplo">Conteúdo</label>
						<textarea type="text" id="exemplo"	
							value={exemplo}
							onChange={e => setExemplo(e.target.value)}
						/>
						
						<label htmlFor="aplicacao_code">Aplicação de código</label>
						<input type="text" id="aplicacao_code"	
							value={aplicacao_code}
							onChange={e => setAplicacaoCode(e.target.value)}
						/>
						
						<label htmlFor="videos">Vídeos</label>
						<input type="text" id="videos"	
							value={videos}
							onChange={e => setVideos(e.target.value)}
						/>
						
					</div>
					<button type="submit">Alterar</button>
				</form>
			</div>

		</PageEdicaoTopico>
	)
}