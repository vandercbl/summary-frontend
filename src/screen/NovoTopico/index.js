import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import { date } from '../../lib/utils'

import { PageNovoTopico } from './styles'

import Menu from '../../components/Menu'
import Header from '../../components/Header'

export default function NovoTopico(){

	const [categoria_id, setCategoriaId] = useState('')
	const [titulo, setTitulo] = useState('')
	const [descricao, setDescricao] = useState('')
	const [exemplo, setExemplo] = useState('')
	const [aplicacao_code, setAplicacaoCode] = useState('')
	const [videos, setVideos] = useState('')
	const [data_criacao, setDataCriacao] = useState(date(Date.now()).iso) //começa com valor da data atual

	const [categorias, setCategorias] = useState([])

	const history = useHistory()

	useEffect(() => {
		api.get(`categorias?pagina=1&limite=1000`).then(response => {
			setCategorias(response.data)
		})
	}, [])

	async function handleTopicos(e){
		e.preventDefault()

		setDataCriacao(date(Date.now()).iso)
		// aqui eu garanto que quando ele deu submit no form, atualizou a data
		// isso aqui só seria necessário se eu tivesse trabalhando com hora, minuto e segundo também

		const data = {
			categoria_id,
			titulo,
			descricao,
			exemplo,
			aplicacao_code,
			videos,
			data_criacao
		}

		try{
			await api.post('topicos', data)
			alert('Tópico cadastrado com sucesso. Você será redirecionado para a página de Tópicos')
			history.push('/topicos')
		}catch(err){
			alert(`Não foi possível cadastar. Erro: ${err}`)
		}

	}

	return(
		<PageNovoTopico>
			<Menu />
			<Header>
				<Link to="/topicos">Tópicos</Link>
				<h1>Novo Tópico</h1>
			</Header>

			<div className="container box-page">
				<p>Preencha os dados abaixo para cadastrar um novo tópico.</p>
				<form onSubmit={handleTopicos}>
					<div className="inputs-group">
						<label htmlFor="categoria_id">Categoria</label>

						<select id="categoria_id" value={categoria_id} onChange={e => setCategoriaId(e.target.value)} required>
								<option value="">Escolha uma categoria</option>
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
						<textarea id="exemplo" 
							value={exemplo}
							onChange={e => setExemplo(e.target.value)}
						/>
						
						<label htmlFor="aplicacao_code">Aplicação de código</label>
						<textarea id="aplicacao_code"
							value={aplicacao_code}
							onChange={e => setAplicacaoCode(e.target.value)}
						/>
						
						<label htmlFor="videos">Vídeos</label>
						<input type="text" id="videos"
							value={videos}
							onChange={e => setVideos(e.target.value)}
						/>
						
					</div>
					<button type="submit">Cadastrar</button>
				</form>
			</div>

		</PageNovoTopico>
	)
}