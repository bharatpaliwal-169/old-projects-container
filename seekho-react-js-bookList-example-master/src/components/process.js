
import React from 'react';
import Book  from "./Book";
import data from '../dataList';


// export default function BookList(props) {
  

//   return (
    
// // hard coded

//     // <div className='row mt-5'>
        
//       //   <div className='col-12 col-md-3 offset-sm-1'>
//       //     <img src='/assets/book-1.jpg' alt='book' className='img-fluid'  />
//       //     <h5>Title  : xxx</h5>
//       //     <p>Author Name : random </p>
//       //     <p>Price:  &#x20B9; 300</p>
//       //   </div>
        
//       //   <div className='col-12 col-md-3 '>
//       //     <img src='/assets/book-2.jpg' alt='book' className='img-fluid'  />
//       //     <h5>Title  : xxx</h5>
//       //     <p>Author Name : random </p>
//       //     <p>Price:  &#x20B9; 300</p>
//       //   </div>
        
//       //   <div className='col-12 col-md-3 '>
//       //     <img src='/assets/book-3.jpg' alt='book' className='img-fluid' />
//       //     <h5>Title  : xxx</h5>
//       //     <p>Author Name : random </p>
//       //     <p>Price:  &#x20B9; 300</p>
//       //   </div>

//       //   <div className='col-12 '>
//       //     {/* <p> {a_book} </p>
//       //     <p> {ek_vastu.rate} </p>
//       //     <p> {out_book} </p>
//       //     <p> {out_obj.rate} </p>
//       //     <h4> {out_obj.title} </h4> */}
//       //   </div>
      
// // nested components      
//       <React.Fragment>
//         <section className='mt-5 mb-2'>
//           <div className='row'>
//             <Book img={firstBook.img} title='Book-1' author='Author-1' price='500' />
//             <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} price={secondBook.price}/>
//             <Book img={firstBook.img} title='Book-3' author='Author-3' price='2500'/>
//             <Book  img={firstBook.img} title={firstBook.title} author={firstBook.author} price={firstBook.price}/>
//           </div>
//         </section>


// {/* single component with multiple props
//         <div className='col-12 col-md-4 '>
//           <div className='card'>
//             <img src = '/assets/book-2.jpg' alt='book' className ='img-fluid'/>
//             <h4>Title book</h4>
//             <h5>Author </h5>
//             <p>{price}</p>
//           </div>
//         </div> */}
//       </React.Fragment>
      
//   );
// };

// const price = 1200;


// const imageCall = '/assets/book-2.jpg';

// implicit call
// const Img = () =>{
//   return <img src='/assets/book-3.jpg' alt='book' className='img-fluid' />
// };

// explicit call
// const Title = () => <h3>Book Title</h3>
// const Author = () => {
//   return <h6 style={{color:'#c2c2c2',fontSize:'1.50rem',fontWeight:'bolder'}}>Author Name</h6>
// };


// object call

// const firstBook = {
//   img: 'assets/book-3.jpg',
//   title: 'Book_Title',
//   author : 'Author_of_the_Book',
//   price : 2500
// };

// const secondBook = {
//   img: 'assets/book-1.jpg',
//   title: 'Book_Title_1',
//   author : 'Author_of_the_Book_1',
//   price : 1500
// };

// const Books = [
//   {
//     id: 1,
//     img: 'assets/book-1.jpg',
//     title: 'Book_Title_1',
//     author : 'Author_of_the_Book',
//     price : 2500
//   },
//   {
//     id:2,
//     img: 'assets/book-2.jpg',
//     title: 'Book_Title_2',
//     author : 'Author_of_the_Book_2',
//     price : 1500
//   },
//   {
//     id:3,
//     img: 'assets/book-3.jpg',
//     title: 'Book_Title_3',
//     author : 'Author_of_the_Book_3',
//     price : 3500
//   }
// ];


export default function BookList(props) {
  return(
    <React.Fragment>
      <section className='mt-5 mb-2'>
        <div className='row'>
          {data.map((book)=> {
            // console.log(book);
            // const {img,title,author,price} = book;
            // spread op
            return <Book key={book.id} {...book}></Book>
            // normal call
            // return <Book key={book.id} book={book}></Book>
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

// const Book = (props) => {
//   console.log(props);
//   // spread op
//   const {img,title,author,price} = props;
//   //normal
//   // const {img,title,author,price} = props.book;
  
//   return(
//     <div className='col-12 col-md-4'>
//       <div className='card  mt-1 p-3'>
//         <img src ={img} alt='book' className='img-fluid' />
//         <h2> {title} </h2>
//         <h4> {author} </h4>
//         <p className='text-muted'>&#8377;  {price}</p>
//       </div>
//     </div>
//   );
// };
