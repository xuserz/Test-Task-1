import './CardGrid.css'

import { type FC, type ReactNode } from 'react'

interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
	header?: ReactNode
}

const CardGrid: FC<CardGridProps> = props => {
	const { header, children, ...restProps } = props

	return (
		<div {...restProps} className={'CardGrid'}>
			{header && <div className={'CardGrid__header'}>{header}</div>}
			<div className={'CardGrid__in'}>{children}</div>
		</div>
	)
}

export default CardGrid
