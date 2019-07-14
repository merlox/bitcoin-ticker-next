import React from 'react'

class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render () {
        return (
            <>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.EUR.description} : <span className="badge badge-primary">{this.props.bpi.EUR.code}</span> <strong>{this.props.bpi.EUR.rate}</strong>
                    </li>
                </ul>
            </>
        )
    }
}

export default Prices
