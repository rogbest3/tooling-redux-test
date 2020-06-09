import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, fetchBook } from './lib/api';
import Loading from './Loading';
import Book from './Book';
import { fetchingBook, fetchedBook, deletingBook, deletedBook } from './module/BookDetails';
import { withRouter } from 'react-router-dom';

//t
const BookDetails = ({match, history}) => {
    const bookDetails = useSelector(state => state.bookDetails)

    const dispatch = useDispatch()
    
    const {loading, book, controlsDisabled} = bookDetails

    useEffect(()=>{
        // const { match : { params : {title}}, fetchingBook, fetchedBook } = bookDetails
        const {title} = match.params
        fetchingBook()
        fetchBook(title).then(book => {
            fetchedBook(book)
        })
    }, [])

    const onDeleteClick = useCallback(()=>{
        // const { book : {title}, deletingBook, deletedBook, history } = bookDetails
        const {title} = match.params
        deletingBook()
        deleteBook(title).then(()=>{
            deletedBook()
            history.push('/')
        })
    }, [])
        
        
    return (
        <Loading loading={loading}>
            <Book {...book} />
            <button 
                disabled={controlsDisabled}
                onClick={onDeleteClick}
            >
                Delete
            </button>
        </Loading>
    );
};

export default withRouter(BookDetails);