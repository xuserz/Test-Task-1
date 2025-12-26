import './Cell.css'

import { type FC, type ReactNode } from 'react'

interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
	before?: ReactNode
	bottom?: ReactNode
}

const Cell: FC<CellProps> = props => {
	const { before, bottom, children, ...restProps } = props

	return (
		<div {...restProps} className={'Cell'}>
			{before && <div className={'Cell__before'}>{before}</div>}
			<div className={'Cell__in'}>
				{children && <div className={'Cell__title'}>{children}</div>}
				{bottom && <div className={'Cell__bottom'}>{bottom}</div>}
			</div>
		</div>
	)
}

export default Cell
