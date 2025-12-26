import './App.css'

import { Panel } from './components'
import { Basket, Products } from './layout'

function App() {
	return (
		<Panel>
			<Products />
			<Basket />
		</Panel>
	)
}

export default App
