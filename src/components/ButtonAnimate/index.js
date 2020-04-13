import React from 'react'

import { ButtonAnimateStyle } from './styles'


export default function ButtonAnimate({ children, p_color, p_hoverColor, p_borderWidth, p_time}){
	return(
		<ButtonAnimateStyle className="btn" p_color={p_color} p_hoverColor={p_hoverColor} p_borderWidth={p_borderWidth} p_time={p_time}>
			<span>
				<span>
					<span className="content">{children}</span>
				</span>
			</span>
		</ButtonAnimateStyle>
	)
}