import React from 'react'
import { NavLink } from 'react-router-dom'

import { CompoMenu } from './styles'

function Menu(){
	return(
		<CompoMenu>
			<div className="container">
				<NavLink to="/categorias" activeClassName="active">Categorias</NavLink>
				<NavLink to="/topicos" activeClassName="active">Tópicos</NavLink>
			</div>
		</CompoMenu>
	);
}

export default Menu