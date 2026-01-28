import useScrollFade from "./useScrollFade";
import { useTranslation } from "react-i18next";

function HobbyCard({book, type}) {

 const [ref, isVisible] = useScrollFade();
 const {t} = useTranslation();
 
 function redirect(book){
    if(book.url) {
        location.href = book.url;
    }
 }

  return (
    <div ref={ref} key={book.id} className={`book fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="book-img-wrapper" style={{backgroundImage: `url(${book.img})`}} onClick={() => redirect(book)}>
            {
                type == 'hobbyBook' ? <div className="bookmark" style={{backgroundColor: book.isCompleted ? 'green' : 'purple'}}>
                    {book.isCompleted ? 'Completed' : 'In Progress'}
                    </div> : ``
            }
           {
               type == 'hobbyBook' ? <div className={book.isCompleted ? 'progress hide' : 'progress show'}>
                                        <div className="range" style={{width: ((book.progress / 100) * 240) + 'px'}}></div>
                                        </div>
                                    : <div className="skill-group">
                                        {
                                            book.tools.map((skill, index) => (
                                                <span key={"skill_" + index}>{skill}</span>
                                            ))
                                        }
                                     </div>
           }
        </div>
        <div className="book-desc">
            <h4 className="book-title">{t(book.title)}</h4>
            {
                type == 'hobbyBook' ? <h6 className="book-auth">{book.author}</h6> 
                : ``
            }
        </div>
    </div>
  )
}

export default HobbyCard