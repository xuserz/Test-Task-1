import { IconCheck, IconPlus } from '../../assets'
import Button from '../Button/Button'
import './Card.css'

import { type FC, type ReactNode } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	icon?: ReactNode
	subtitle?: ReactNode
	price?: ReactNode
	onAdd?: React.HTMLAttributes<HTMLButtonElement>['onClick']
	selected?: boolean
}

const Card: FC<CardProps> = props => {
	const {
		icon,
		subtitle,
		price,
		onAdd,
		selected = false,
		children,
		...restProps
	} = props

	return (
		<div {...restProps} className={'Card'}>
			{icon && <div className={'Card__icon'}>{icon}</div>}
			<div className={'Card__in'}>
				{children && <div className={'Card__title'}>{children}</div>}
				{subtitle && <div className={'Card__subtitle'}>{subtitle}</div>}
				{(price || onAdd) && (
					<div className={'Card__bottom'}>
						{price && <div className={'Card__price'}>{price}</div>}
						{onAdd && (
							<div
								className={`Card__button ${
									selected ? `Card__button--selected` : ''
								}`}
							>
								<Button onClick={onAdd} type={'icon'}>
									<span className={'Card__button_check'}>
										<IconCheck />
									</span>
									<span className={'Card__button_plus'}>
										<IconPlus />
									</span>
								</Button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default Card
