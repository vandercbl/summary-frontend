import React from 'react'
import { Link } from 'react-router-dom'

import { CompoHeader } from './styles' 

function Header({ children }){
	return(
		<CompoHeader>
			<div className="container">
				<Link to="/">Home</Link>
				{children}
			</div>
		</CompoHeader>
	)
}

export default Header