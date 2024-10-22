import Home from './components/Home'


const ItemsList = [
    {
        id: 1,
        amount: 50
    },
    {
        id: 2,
        amount: 150
    },
    {
        id: 3,
        amount: 200
    },
    {
        id: 4,
        amount: 500
    },
]

const App = () => 
    <Home ItemsList={ItemsList} />


export default App;