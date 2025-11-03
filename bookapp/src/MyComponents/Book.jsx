import React from 'react'
// import css
import './Book.css'
const Book = () => {
  return (
    <div id="book">
        <img src="https://booksandyou.in/cdn/shop/files/TheMathBook_1.webp?v=1732795361" alt="Book Cover" style={{height:400,width:300}} />
        <h1>Title:Math</h1>
        <h1>250</h1>
    </div>
  )
}
export default Book;
// export default Book
// import React from 'react'
// const booksdata=[
//     {
//         imageSrc:"https://booksandyou.in/cdn/shop/files/TheMathBook_1.webp?v=1732795361",
//         title:"Math",
//         Price:250

//     }

// ]

// // map the booksdata array to display multiple books
// const Book = () => {
//   return (
//     <div>
//         {booksdata.map((book,index)=>(
//             <div id="book" key={index}>
//                 <img src={book.imageSrc} alt="Book Cover" style={{height:400,width:300}} />
//                 <h1>Title:{book.title}</h1>
//                 <h1>Price:{book.Price}</h1>
//             </div>
//         ))}

//     </div>
//   )
// }

// export default Book

