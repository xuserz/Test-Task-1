import './Separator.css'

import { type FC } from 'react'

interface SeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {
	//
}

const Separator: FC<SeparatorProps> = props => {
	const { ...restProps } = props

	return <span {...restProps} className={`Separator`}></span>
}

export default Separator
