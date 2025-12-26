import './Panel.css'

import { type FC, type ReactNode } from 'react'

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
	before?: ReactNode
	bottom?: ReactNode
}

const Panel: FC<PanelProps> = props => {
	const { children, ...restProps } = props

	return (
		<div {...restProps} className={'Panel'}>
			{children}
		</div>
	)
}

export default Panel
