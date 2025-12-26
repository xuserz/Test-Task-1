import './Button.css'

import { type FC, type ReactNode } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	type?: 'default' | 'icon'
	size?: 'medium'
}

const Button: FC<ButtonProps> = props => {
	const { type = 'default', size = 'medium', children, ...restProps } = props

	return (
		<button
			{...restProps}
			className={`Button Button__type--${type} Button__size--${size}`}
		>
			{children}
		</button>
	)
}

export default Button
