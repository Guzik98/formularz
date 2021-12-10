import { BookType } from '../../Types/book-type';
import { Dispatch, SetStateAction } from 'react';

export type DisplayDataType = {
    books: BookType[];
};

export type FormDataType = {
    book: BookType;
    error: boolean;
    setBook: Dispatch<SetStateAction<BookType>>;
    submit: () => void;
};