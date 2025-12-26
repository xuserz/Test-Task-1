import './Products.css'

import { type FC } from 'react'

import { Avatar, Card, CardGrid } from '../../components'
import { useGlobalState } from 'elum-state/react'

import { BASKET_ATOM, PRODUCTS_ATOM } from '../../state'

const Products: FC = () => {
	const [products] = useGlobalState(PRODUCTS_ATOM)
	const [basket, setBasket] = useGlobalState(BASKET_ATOM)

	const onAdd = (productId: string) => {
		setBasket(ids => {
			const index = ids.findIndex(x => x === productId)
			if (index === -1) {
				ids.push(productId)
			} else {
				ids.splice(index, 1)
			}

			return [...ids]
		})
	}

	return (
		<>
			{products.map((category, index) => (
				<CardGrid header={category.category} key={`category_${index}`}>
					{category.services.map(item => (
						<Card
							key={`item_${item.id}`}
							icon={<Avatar width={'100%'} height={'100%'} src={item.image} />}
							subtitle={item.description}
							price={`${item.price} Рублей`}
							onAdd={() => onAdd(item.id)}
							selected={!!basket.find(x => x === item.id)}
						>
							{item.name}
						</Card>
					))}
				</CardGrid>
			))}
		</>
	)
}

export default Products
