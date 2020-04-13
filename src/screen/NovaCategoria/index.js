import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom' //useHistory vai permitir redirecionar o usuário pós cadastro

import api from '../../services/api'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

import { PageNovaCategoria } from './styles'


export default function NovaCategoria(){

	const [nome, setNome] = useState('')
	const [descricao, setDescricao] = useState('')

	const history = useHistory() //esse history, vai permitir fazer navegação pelo javascript	

	async function handleRegister(e){
		e.preventDefault();
		
		const data = {nome, descricao}

		try {
			await api.post('categorias', data)
			//enviando os dados para a rota categoria do backend através do metódo post

			alert('Categoria cadastrada com sucesso. Você será redirecionado para a página de Categorias')
			history.push('/categorias') // redirecionando para a página de categorias
		}catch(err){
			alert(`Não foi possível realizar o cadastro. Erro: ${err}`)
		}
	}

	return(
		<PageNovaCategoria>
			<Menu />
			<Header>
				<Link to="/categorias">Categorias</Link><h1>Nova Categoria</h1>
			</Header>

			<div className="container box-page">
				<p>Preencha o formulário abaixo para cadastrar uma nova categoria.</p>
				<form onSubmit={handleRegister}>
					<div className="inputs-group">
						<label htmlFor="nome">Nome:</label>
						<input 
							type="text" id="nome" required
							value={nome}
							onChange={e => setNome(e.target.value)}
						/>

						<label htmlFor="descricao">Descrição:</label>
						<textarea 
							id="descricao"
							value={descricao}
							onChange={e => setDescricao(e.target.value)}
						></textarea>
					</div>
					<button type="submit">Cadastrar</button>
				</form>
			</div>
		</PageNovaCategoria>
	)
}