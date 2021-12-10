import React, { useEffect, useState } from 'react';
import './main-page.sass';
import { BookType } from '../../Types/book-type';
import Form from './components/Form';
import Display from './components/Display';

const MainPage = (): JSX.Element => {

    const [book, setBook] = useState<BookType>({
        title: '',
        author: '',
        priority: 1,
        category: 'Biology'
    });

    const [books, setBooks]  = useState<BookType[]>([]);
    const [process, setProcess] = useState<boolean>(false);
    const [firstRender, setFirstRender] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const submit = () => {
        setProcess(true);
    }

    useEffect( () => {
        if(process){
            if(book.title.length > 1 && book.author.length > 3){
                setBooks(prev => [...prev, {...book}]);
                setBook( {...book, title: '',  author: ''})
                setError(false);
            } else {
                setError(true);
            }
        }
        setProcess(false);
    },[process])

    useEffect( () => {
        if(!firstRender){
            localStorage.setItem('books', JSON.stringify(books));
        }
        setFirstRender(false);
    },[books])

    useEffect( () => {
        console.log(JSON.parse(localStorage.getItem('books') || '[]'))
        setBooks(JSON.parse(localStorage.getItem('books') || '[]'));
    },[])

    return (
        <div className='main-page'>
            <Display books={books}/>
            <Form book={book} setBook={setBook} submit={submit} error={error}/>
        </div>
    );
};

export default MainPage;