import { getter } from 'elum-state/react'
import { PRODUCTS_ATOM } from '../state'

function getProductById(id: string) {
	const products = getter(PRODUCTS_ATOM)

	for (const category of products) {
		for (const item of category.services) {
			if (item.id === id) {
				return item
			}
		}
	}

	return undefined
}

export default getProductById
