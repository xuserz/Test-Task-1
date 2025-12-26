import { type FC } from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
	// Можно добавить кастомные пропсы
}

const IconPlus: FC<IconProps> = props => {
	const { ...restProps } = props

	return (
		<svg
			{...restProps}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2' // camelCase для React
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M12 5l0 14' />
			<path d='M5 12l14 0' />
		</svg>
	)
}

export default IconPlus
