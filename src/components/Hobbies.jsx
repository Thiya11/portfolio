import { BOOK_LIST } from "../common/configs"

function Hobbies() {
    const books = BOOK_LIST;
  return (
    <section className="hobbies-section">
        <div className="section-header">
            <h2 className="primary-text">{"Other than Coding"}</h2>
            <h6 className="secondary-text text-center">
                Like to read lot of books, some of them from my recent collection.
            </h6>
        </div>
        <div className="hobbies-content container">
            <div className="books-shelf col-12">
                {
                    books.map(book => (
                        <div key={book.id} className="book">
                           <div className="book-img-wrapper" style={{backgroundImage: `url(${book.img})`}}>
                                <div className="bookmark" style={{backgroundColor: book.isCompleted ? 'green' : 'purple'}}>
                                        {book.isCompleted ? 'Completed' : 'In Progress'}
                                </div>
                                <div className={book.isCompleted ? 'progress hide' : 'progress show'}>
                                    <div className="range" style={{width: ((book.progress / 100) * 240) + 'px'}}></div>
                                </div>
                            </div>
                           <div className="book-desc">
                                <h4 className="book-title">{book.title}</h4>
                                <h6 className="book-auth">{book.author}</h6>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Hobbies