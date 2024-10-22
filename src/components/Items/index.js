import './index.css'
const Items = props => {
    const {balanceDetails, updateBalance} = props
    const {amount} = balanceDetails

    const onChangeAmount = () => {
        updateBalance(amount)
    }

    return (
        <li className='buttons-container'>
            <button className="button" onClick={onChangeAmount}>{amount}</button>
        </li>
    )
}
export default Items