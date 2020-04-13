import React from 'react'

import { CompoSideNav } from './styles'

export default function SideNav(props){
	return(
		<CompoSideNav>
			<div className="container">
				{props.children}
			</div>
		</CompoSideNav>
	)
}