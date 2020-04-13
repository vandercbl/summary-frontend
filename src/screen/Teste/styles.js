import styled from 'styled-components'

const getTipo = tipo => {
	if (tipo === "primary") {
		return `
			background: blue;
		`
	}
	if (tipo === "error") {
		return `
			background: red;
		`
	}
	if (tipo === "success") {
		return `
			background: green;
		`
	}
	if (tipo === "warning") {
		return `
			background: orange;
		`
	}
}

export const Button = styled.button`
	cursor: pointer;
	margin: 5px;
	padding: 10px;
	background: #ccc;
	border: 1px solid #333;
	/* border-radius: ${(props) => props.arredondado ? "10px" : null }; */
	border-radius: ${({arredondado}) => arredondado ? "10px" : null }; /* forma mais encurtada de escrever a linha de cima */
	color: #fff;
	/* ${(props) => getTipo(props.tipoPropriedade)}; */
	${({tipoPropriedade}) => getTipo(tipoPropriedade)}; /* forma mais encurtada de escrever a linha de cima */

`