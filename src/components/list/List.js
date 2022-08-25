import React from 'react';
import {API_ULR} from '../../config'
import {handleResponse} from '../../helpers'
import Loading from '../common/Loading'
import Table from './Table';
import './Table.css'
import Pagination from './Pagination'

class List extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1,
        };
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
    }
    
    componentDidMount(){
        this.fetchCurrencies();
    }
    fetchCurrencies() {
        this.setState({loading: true});
        const {page} = this.state

        fetch(`${API_ULR}/cryptocurrencies?page=${page}&perPage=20`)
        .then(handleResponse)
        .then((data)=> {
            const { currencies, totalPages } = data
            this.setState({
                currencies,
                totalPages,
                loading: false,
            });
        })
        .catch((error)=> {
            this.setState({
                error:error.errorMessage,
                loading: false,
            });
        });
    }

   

    handlePaginationClick(direction){
        let nextPage = this.state.page;

        nextPage = direction === 'next'? nextPage + 1: nextPage - 1;

        this.setState({page: nextPage}, ()=>{
            this.fetchCurrencies();
        });
    }


    render(){
        const {currencies,page,totalPages,error,loading} = this.state
        if(error){
            return <div>Error...</div>
        }

        if(loading){
            return <div className='loading-container'><Loading/></div>
        }
    return(
        <>
        <Table
        currencies={currencies}
        />        
        <Pagination
        page={page}
        totalPages={totalPages}
        handlePaginationClick={this.handlePaginationClick}
        />
        </>
    )
    }
}

export default List


