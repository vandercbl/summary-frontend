import React from 'react'

import { Button } from './styles'

export default function Teste(){

	return(
		<div>
			<Button>Sem propriedade</Button>
			<Button tipoPropriedade="primary">Primary</Button>
			<Button tipoPropriedade="error">Error</Button>
			<Button tipoPropriedade="success">Success</Button>
			<Button tipoPropriedade="warning">Warning</Button>
			<Button tipoPropriedade="warning" arredondado>Warning</Button>
		</div>
	)
}