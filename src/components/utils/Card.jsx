import fullStar from '../../assets/images/icons/star-fill.svg';
import halfStar from '../../assets/images/icons/star-half.svg';
import emptyStar from '../../assets/images/icons/star.svg';

function Card({data, cardType}) {
    let skillData = {};
    if (cardType === 'skill') {
        skillData = data;
    }
    const renderStars = (level) => {
        const fullStars = Math.floor(level);
        const halfStars = level % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;
        const stars = [];
    
        for (let i=0; i<fullStars; i++) {
            stars.push(<img src={fullStar} alt="star" key={`full_${i}`} />);
        }
    
        if (halfStars) {
            stars.push(<img src={halfStar} alt="star" key='half' />);
        }
    
        if (emptyStars) {
            for(let i=0; i<emptyStars; i++) {
                stars.push(<img src={emptyStar} alt="star" key={`empty_${i}`} />);
            }
        }
    
        return stars;
     }
    return (
        <div className="skill-card" id={cardType == 'skill' ? "skill_" + skillData.id : ''}>
             <div className="skill-icon">
                <img src={skillData.icon} alt={skillData.title} />
            </div>
            <div className="skill-desc">
                <h4 className="skill-title">{skillData.title}</h4>
                <div className="skill-level">
                    {renderStars(skillData.level)}
                </div>
            </div>
        </div>
    )
  }
  
  export default Card