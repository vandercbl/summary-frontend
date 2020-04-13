import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3333', //caminho da URL da nossa api, como estou no localhost será esse
})

export default api