import React from 'react'
import { Link } from 'react-router-dom'

import { PageHome } from './styles'

import { FaBoxOpen, FaBook } from 'react-icons/fa' // https://react-icons.netlify.com/#/icons/fa

import ButtonAnimate from '../../components/ButtonAnimate'

export default function Home() {

	return(
		<PageHome>
			<main className="container">
				
				<Link to="/categorias">
					<ButtonAnimate p_color="transparent" p_hoverColor={({ theme }) => theme.primaryColor} p_borderWidth="1px" p_time="1s">
						<FaBoxOpen /> Categorias
					</ButtonAnimate>
				</Link>

				<Link to="/topicos">
						<ButtonAnimate p_color="transparent" p_hoverColor={({ theme }) => theme.primaryColor} p_borderWidth="1px" p_time="1s">
							<FaBook /> Tópicos
						</ButtonAnimate>
				</Link>
				
			</main>
		</PageHome>
	)
}