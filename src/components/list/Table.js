import React from 'react'
import './Table.css'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {renderChangePercent} from '../../helpers'

const Table = (props)=> {
    const {currencies, history} = props
    return(
        <div className='Table-container'>
        <table className='Table'>
            <thead className='Table_head'>
                <tr>
                    <th>Cryptocurrencies</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24H Change</th>
                </tr>
            </thead>
            <tbody className="Table-body">
            {currencies.map((currency)=>(
                <tr
                key={currency.id}
                onClick={() => history.push(`/currency/${currency.id}`)}
                >
                    <td>
                        <span className='Table-rank'>{currency.rank}</span>
                        {currency.name}
                    </td>
                    <td>
                        <span className='Table-dollar'>${currency.price}</span>
                    </td>
                    <td>
                        <span className='Table-dollar'>${currency.marketCap}</span>
                    </td>
                    <td>
                        {renderChangePercent(currency.percentChange24h)}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    )
}

Table.propTypes = {
    history: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
}

export default withRouter(Table)