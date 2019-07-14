import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

class Index extends React.Component {
    static async getInitialProps () {
        const result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const data = await result.json()
        return {
            bpi: data.bpi
        }
    }

    render () {
        return (
            <Layout>
                <div className="container">
                    <h1>Bitcoin Prices</h1>
                    <Prices bpi={this.props.bpi} />
                </div>
            </Layout>
        )
    }
}

export default Index
