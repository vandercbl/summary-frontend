import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from 'react-icons/io'

import { FiEye, FiTrash2 } from 'react-icons/fi'
import { FaRegEdit } from 'react-icons/fa'

import { PageTopicos } from './styles'

import api from '../../services/api'
import { date } from '../../lib/utils'

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import SideNav from '../../components/SideNav'


export default function Topicos() {

	const [topicos, setTopicos] = useState([])
	const [termoBusca, setTermoBusca] = useState('')

	const handleBusca = event => {
		setTermoBusca(event.target.value)
	}

	useEffect(() => {
		api.get(`topicos?busca=${termoBusca}&pagina=1&limite=100`)
			.then(response => {
				setTopicos(response.data)
			})
	}, [termoBusca])

	async function handleDeleteTopico(id){
		try {
			await api.delete(`topicos/${id}`)
			setTopicos(topicos.filter(topico => topico.id !== id))
			// essa linha de cima é só para esconder a exclusão, para não utilizar dentro useEffect e forçar a renderização de todo o componente
			alert(`Tópico deletado com sucesso.`)			
		}catch (err) {
			alert(`Não foi possível delete o tópico. Erro: ${err}`)
		}
	}

	return (
		<PageTopicos>
			<Menu />
			<Header>
				<h1>Tópicos</h1>
			</Header>
			<SideNav>
				<Link to="/topicos/novo"><IoIosAddCircleOutline /> Adicionar</Link>
				<input type="text" placeholder="Filtre por título ou descrição"
					value={termoBusca}
					onChange={handleBusca}
				/>
			</SideNav>

			<div className="container">
				<ul className="grid-items">
					{topicos.map(topico => (
						<li key={topico.id}>

							<strong>TÍtulo</strong>
							<p>{topico.titulo}</p>
							<strong>Descrição</strong>
							<p>{topico.descricao}</p>
							{/* <strong>Exemplo</strong>
							<p>{topico.exemplo}</p>
							<strong>Aplicação Code</strong>
							<p>{topico.aplicacao_code}</p>
							<strong>Vídeos</strong>
							<p>{topico.videos}</p> */}

							<div className="info-complement">
								<p className="highlight">{topico.categoria_nome}</p>

								<div>
									<span>Criado em</span>
									<p>{date(topico.data_criacao).format}</p>
								</div>
							</div>

							<div className="box-actions">

								<Link to={`/topicos/${topico.id}`} title="Visualizar todo o conteúdo do tópico">
									<FiEye/> Conteúdo
								</Link>

								<div className="alter-icons">								
									<Link to={`/topicos/${topico.id}/edicao`} title="Editar tópico">
										<FaRegEdit/>
									</Link>
									<button onClick={() => handleDeleteTopico(topico.id)} title="Excluir tópico">
										<FiTrash2/>
									</button>

									{/* no react para chamar uma função com parâmetro, tenho que criar um função anônima, para chama essa função
									se fizer na forma tradicional do javascript funcao(parametro) ele vai executar imediatamente*/}
								</div>

							</div>

						</li>
					))}
				</ul>
			</div>

		</PageTopicos>
	)
}