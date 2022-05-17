import React from 'react';
import Book  from "./Book";
import Books from '../dataList';


export default function BookList(props) {
  return(
    <React.Fragment>
      <section className='mt-5 mb-2'>
        <div className='row'>
          {Books.map((book)=> {
            return <Book key={book.id} {...book}></Book>
          })}
        </div>
      </section>
    </React.Fragment>
  );
}


