import { Dispatch, SetStateAction } from 'react';

export type BookType = {
    title: string,
    author: string,
    priority: number,
    category: string
}

export type FormBook = {
    book: BookType;
    setBook: Dispatch<SetStateAction<BookType>>;
}
