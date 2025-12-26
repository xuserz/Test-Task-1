import { type FC } from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
	// Можно добавить кастомные пропсы
}

const IconCheck: FC<IconProps> = props => {
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
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path d='M5 12l5 5l10 -10' />
		</svg>
	)
}

export default IconCheck
