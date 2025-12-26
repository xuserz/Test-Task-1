import './Avatar.css'

import { useState, type FC, type ReactNode } from 'react'

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
	width?: string
	height?: string

	src?: string
}

const Avatar: FC<AvatarProps> = props => {
	const { ...restProps } = props

	const [hidden, setHidden] = useState(true)

	const onLoad = () => {
		setHidden(false)
	}

	const onError = () => {
		setHidden(true)
	}

	return (
		<div className={`Avatar ${hidden ? `Avatar--hidden` : ''}`}>
			<img {...restProps} onLoad={onLoad} onError={onError} />
			<span className={'Avatar__placeholder'} />
		</div>
	)
}

export default Avatar
