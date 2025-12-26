import { atom } from 'elum-state/react'

export type Products = {
	category: string
	services: {
		id: string
		name: string
		description: string
		image: string
		price: number
	}[]
}[]

const PRODUCTS_ATOM = atom<Products>({
	key: 'products',
	default: [
		{
			category: 'Питание',
			services: [
				{
					id: 'food-1',
					name: 'Премиум-питание от шефа',
					description: 'Гастрономическое меню от известного шеф-повара',
					image:
						'https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-burger-food-png-free-download-png-image_10199386.png',
					price: 2500,
				},
				{
					id: 'food-2',
					name: 'Детское специальное меню',
					description: 'Сбалансированное питание для детей',
					image:
						'https://png.pngtree.com/png-clipart/20250104/original/pngtree-nutritional-and-healthy-childrens-meal-png-image_6790375.png',
					price: 1200,
				},
				{
					id: 'food-3',
					name: 'Премиум-алкоголь',
					description: 'Шампанское и виски премиум-класса',
					image:
						'https://png.pngtree.com/png-vector/20240624/ourmid/pngtree-alcohol-bottles-png-image_12818947.png',
					price: 1800,
				},
			],
		},
		{
			category: 'Багаж',
			services: [
				{
					id: 'luggage-1',
					name: 'Дополнительный чемодан',
					description: '+23 кг к вашей норме багажа',
					image: '',
					price: 3500,
				},
				{
					id: 'luggage-2',
					name: 'Перевес багажа (до 5 кг)',
					description: 'Увеличение веса вашего багажа',
					image: '',
					price: 2000,
				},
				{
					id: 'luggage-3',
					name: 'Хрупкий багаж',
					description: 'Особая обработка хрупких предметов',
					image: '',
					price: 1500,
				},
			],
		},
		{
			category: 'Комфорт',
			services: [
				{
					id: 'comfort-1',
					name: 'Набор для сна',
					description: 'Маска, беруши, носки премиум-класса',
					image: '',
					price: 600,
				},
				{
					id: 'comfort-2',
					name: 'Розетка у кресла',
					description: 'Личная розетка на весь полет',
					image: '',
					price: 400,
				},
				{
					id: 'comfort-3',
					name: 'Занять целый ряд',
					description: 'Бронирование трех мест для комфорта',
					image: '',
					price: 5000,
				},
			],
		},
		{
			category: 'Развлечения',
			services: [
				{
					id: 'entertainment-1',
					name: 'Премиум Wi-Fi',
					description: 'Высокоскоростной интернет на весь полет',
					image: '',
					price: 1200,
				},
				{
					id: 'entertainment-2',
					name: 'Медиатека с новинками',
					description: 'Доступ к новым фильмам и сериалам',
					image: '',
					price: 700,
				},
				{
					id: 'entertainment-3',
					name: 'Прокат планшета',
					description: 'Планшет с играми и развлечениями',
					image: '',
					price: 900,
				},
			],
		},
		{
			category: 'Страховка и здоровье',
			services: [
				{
					id: 'insurance-1',
					name: 'Расширенная страховка',
					description: 'Полное страхование на время путешествия',
					image: '',
					price: 2200,
				},
				{
					id: 'insurance-2',
					name: 'Аптечка премиум',
					description: 'Набор первой помощи расширенный',
					image: '',
					price: 850,
				},
				{
					id: 'insurance-3',
					name: 'Медконсультация в полете',
					description: 'Консультация с врачом онлайн',
					image: '',
					price: 3000,
				},
			],
		},
	],
})

export default PRODUCTS_ATOM
