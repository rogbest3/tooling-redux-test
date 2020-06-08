import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewBookTitle, setNewBookAuthor, setNewBookImageUrl, creatingBook, createdBook } from './module/newbook';
import { createBook } from './lib/api';

const NewBook = () => {
    const newBookState = useSelector(state => state.newBook)
    const dispatch = useDispatch()

    const onTitleChange = useCallback( ({ target : {value} }) => (
        console.log(value),
        dispatch(setNewBookTitle(value))
    ), [dispatch])
    const onAuthorChange = useCallback( ({ target : {value} }) => (
        console.log(value),
        dispatch(setNewBookAuthor(value))
    ), [dispatch] )
    const onImageURLChange = useCallback( ({ target : {value} }) => (
        dispatch(setNewBookImageUrl(value))
    ), [dispatch] )
    const onCreateBoook = useCallback( (title, author) => (
        dispatch(creatingBook()),
        console.log(title, author),
        createBook(title, author).then( ()=> {
            dispatch(createdBook())
            console.log('책 생성 완료')
        })
    ), [dispatch])

    const { title, author, controlDisabled } = newBookState

    return (
        <section className="NewBook">
            <label>
                Title : 
                <input 
                    autoFocus
                    onChange={onTitleChange}
                    value={title}
                    disabled={controlDisabled}
                />
            </label><br/>
            <label>
                Author : 
                <input 
                    onChange={onAuthorChange}
                    value={author}
                    disabled={controlDisabled}
                />
            </label><br/>
            <button
                onClick={()=>onCreateBoook(title, author)}
                disabled={controlDisabled}    
            >
                Create 
            </button>
        </section>
    );
};

export default NewBook;