import { BOOK_LIST } from "../common/configs"
import HobbyCard from "./utils/HobbyCard";
import useScrollFade from "./utils/useScrollFade";

function Hobbies() {
    const books = BOOK_LIST;
    const [ref, isVisible] = useScrollFade();
  return (
    <section className="hobbies-section">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">{"Other than Coding"}</h2>
            <h6 className="secondary-text text-center">
                Like to read lot of books, some of them from my recent collection.
            </h6>
        </div>
        <div className="hobbies-content container">
            <div className="books-shelf col-12">
                {
                    books.map(book => (
                        <HobbyCard key={book.id} book={book} type='hobbyBook'></HobbyCard>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Hobbies