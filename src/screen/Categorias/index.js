import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// useState é utilizado para guardar o estado da variável / dado
// useEffect é utilizado para executar o que está dentro dele, depois de ele renderizar o componente

import { FiEye, FiTrash2 } from 'react-icons/fi'
import { FaRegEdit } from 'react-icons/fa'

import api from '../../services/api'

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import SideNav from '../../components/SideNav'

import { PageCategorias } from './styles'
import { IoIosAddCircleOutline } from 'react-icons/io'

export default function Categorias() {

	const [categorias, setCategorias] = useState([])
	const [termoBusca, setTermoBusca] = useState('')
	// categorias guarda o estado, setCategorias vou utilizar para alterar o valor do estado
	// o useState está definindo o valor inicial, coloquei um array vazio, pq vou buscar as informações da api
	
	const handleBusca = event => {
		setTermoBusca(event.target.value)
	}

	useEffect(() => {
		api.get(`categorias?busca=${termoBusca}&pagina=1&limite=100`)
			.then(response => {
				setCategorias(response.data)
			})
	}, [termoBusca])
	//useEffect(() => { faz alguma coisa }, [a variável que eu colocar aqui, posso utilizar para ele comparar se houve mudança e só renderizar se houver mudança])
	//essa última parte quando bem utilizada melhora performance, preciso entender melhor como usar

	function handleDelete(id){

		api.delete(`categorias/${id}`).then(response => {
			setCategorias(categorias.filter(categoria => categoria.id !== id))
			alert(`Categoria excluída com sucesso`)
		}).catch(error => {
			console.log(error)
			alert(`Não foi possível excluir a categoria. Err: ${error}`)
		})
	}

	return (
		<PageCategorias>
			<Menu />
			<Header>
				<h1>Categorias</h1>
			</Header>
			<SideNav>
				<Link to="/categorias/nova"><IoIosAddCircleOutline/> Adicionar</Link>
				<input type="text" placeholder="Filtre por categoria" id="input_search" 
					value={termoBusca}
					onChange={handleBusca}
				/>
			</SideNav>
			<div className="container">
				<ul className="grid-items">
					{/* só percorrendo os dados e imprimindo em tela. Sempre que tiver uma estrutura
					de repetição, utilizar o key como identificado único entre os irmãos */}
					{categorias.map(categoria => (
						<li key={categoria.id}>
							<strong>Nome</strong>
							<p>{categoria.nome}</p>
							<strong>Descrição</strong>
							<p className="p2">{categoria.descricao}</p>

							<div className="box-actions">
								<Link to={`/categoria/${categoria.id}/topicos`} title="Visualizar todos os tópicos dessa categoria">
									<FiEye/> Tópicos
								</Link>

								<div className="alter-icons">
									<Link to={`/categorias/${categoria.id}/edicao`} title="Editar categoria">
										<FaRegEdit/>
									</Link>
									
									<button onClick={e => handleDelete(categoria.id)} title="Excluir categoria"><FiTrash2/></button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</PageCategorias>

	)
}