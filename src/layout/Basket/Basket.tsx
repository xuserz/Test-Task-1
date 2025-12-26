import { useGlobalState } from 'elum-state/react'
import { Button, Separator } from '../../components'
import './Basket.css'

import { useState, type FC } from 'react'
import { BASKET_ATOM } from '../../state'
import { decWord } from '@minsize/utils'
import { getProductById } from '../../utils'

const Basket: FC = () => {
	const [basket, setBasket] = useGlobalState(BASKET_ATOM)

	const [hidden, setHidden] = useState(!basket.length)

	const onPay = () => {
		setBasket([])
	}

	return (
		<div
			onTransitionStart={() => {
				setHidden(false)
			}}
			onTransitionEnd={() => {
				setHidden(!basket.length)
			}}
			className={`Basket ${basket.length ? `Basket--visible` : ''} ${
				hidden ? `Basket--fixed` : ''
			}`}
		>
			<div className={'Basket__items'}>
				{basket.map((productId, index) => {
					const product = getProductById(productId)

					return (
						<div key={index} className={'Basket__item'}>
							<span>{product?.name}</span>
							<span>{product?.price} Рублей</span>
						</div>
					)
				})}
			</div>
			<div className={'Basket__price'}>
				<span>
					{basket.length}{' '}
					{decWord(basket.length, ['товар', 'товара', 'товаров'])}
				</span>
				<span>
					{basket.reduce((acc, productId) => {
						return acc + (getProductById(productId)?.price ?? 0)
					}, 0)}{' '}
					Рублей
				</span>
			</div>
			<Separator />
			<Button onClick={onPay}>Оформить заказ</Button>
		</div>
	)
}

export default Basket
