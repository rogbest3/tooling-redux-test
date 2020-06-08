import React, { useEffect, useCallback } from 'react';
import { fetchBooks } from './lib/api';
import Loading from './Loading';
import './Home.css'
import Book from './Book'
import { useSelector, useDispatch } from 'react-redux';
import { fetchingBooks, fetchedBooks, setFilterValue } from './module/home';

const Home = ({match}) => {

    const home = useSelector( state => state.home)
    const dispatch = useDispatch()
    
    const onFilterChange = useCallback(({target : {value}})=>{
        dispatch(setFilterValue(value))
    }, [dispatch])

    useEffect(()=>{
        dispatch(fetchingBooks())
        fetchBooks()
            .then(books => {
                dispatch(fetchedBooks(books))
            })
    }, [dispatch])
    
    const { loading, books, filterValue } = home

    return (
        <Loading loading={loading}>
            <section>
                <input 
                    placeholder="Filter"
                    onChange={onFilterChange}
                    value={filterValue}
                />
            </section>
            <section className="Books">
                {books.filter( book =>
                    filterValue.length === 0 || 
                    new RegExp(filterValue, 'gi').test(book.title)    
                ).map( book => (
                    <Book 
                        key={book.title}
                        title={book.title}
                        author={book.author}
                        imgURL={book.imgURL}
                    />       
                ))}
            </section>
        </Loading>
    );
};

export default Home;