import orgLink from '../../assets/images/icons/box-arrow-up-right.svg';
import work from '../../assets/images/icons/briefcase-fill.svg';
import education from '../../assets/images/icons/book-fill.svg';

function ExpCard({data}) {
  return (
    <div className={data.sortOrderId % 2 == 1 ? "exp-card-section d-flex flex-row-reverse container" : "exp-card-section d-flex flex-row container"}>
        <div className="col-5 exp-card pr-2">
            <div className="exp-title">
                <h4>{data.role}</h4>
            </div>
            <div className="exp-sub-text">
                <a href={data.url} className="org-link" target='_blank'>
                    {data.company + ' - ' + data.location}
                    <img src={orgLink} className='org-link-logo'></img>
                </a>
                <p className='text-start sub-text-exp'>{data.currentJob ? data.startDate + ' - Present' : data.startDate + ' - ' + data.endDate}</p>
            </div>
            <div className="exp-description">
                <p>{data.description}</p>
            </div>
        </div>
        <div className="col-3">
            <div className={data.sortOrderId % 2 == 1 ? "center-line right" : "center-line left"}>
                <img src={data.id === 422957 ? education : work}></img>
            </div>
        </div>
        <div className="col-4">

        </div>
    </div>
  )
}

export default ExpCard