import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, fetchBook } from './lib/api';
import Loading from './Loading';
import Book from './Book';
import { fetchingBook, fetchedBook, deletingBook, deletedBook } 
    from './module/bookDetails';
import { withRouter } from 'react-router-dom';

const BookDetails = ({match, history}) => {
    const bookDetails = useSelector(state => state.bookDetails)
    const dispatch = useDispatch()
    
    const {loading, book, controlsDisabled} = bookDetails
    const {title} = match.params

    useEffect(()=>{
        console.log('title : ', title)
        dispatch(fetchingBook())
        fetchBook(title).then( book => {
            console.log('book : ', book)
            dispatch(fetchedBook(book))
        })
    },[])

    console.log('loading1 : ', loading, book, title)  

    const onDeleteClick =()=>{
        console.log('delete')
        dispatch(deletingBook())
        deleteBook(title).then(()=>{
            dispatch(deletedBook())
            history.push('/')
        })
    }
        
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