import { atom } from 'elum-state/react'

const BASKET_ATOM = atom<string[]>({
	key: 'basket',
	default: [],
})

export default BASKET_ATOM
