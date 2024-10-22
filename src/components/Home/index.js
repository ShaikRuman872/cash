import { Component } from "react";
import Items from "../Items";
import './index.css'

class Home extends Component{
    state = {
        balance :2000
    }

    updateBalance = amount => {
        this.setState(prevState => ({balance: prevState.balance-amount}))
    }

    render(){
        const {balance} = this.state
        const {ItemsList} = this.props
        return (
            <div className="main-container">
                <div className="app-container">
                    <div className="container">
                        <div className="header-section">
                            <p className="letter">R</p>
                            <h1 className="name"> Shaik Ruman</h1>
                        </div>
                        <div className="account-container">
                            <p className="balance"> Your Balance </p>
                            <p className="number">{balance} <br /> <span className="rupee">In Rupees</span> </p>
                        </div>
                        <div className="withdraw-container">
                            <p className="withdraw">withdraw</p>
                            <p className="sum">CHOOSE SUM (IN RUPEES)</p>
                        </div>
                        <ul className="items">
                            {ItemsList.map(eachItem => (
                                <Items key={eachItem.id} 
                                balanceDetails={eachItem}
                                updateBalance={this.updateBalance}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home