import orgLink from '../../assets/images/icons/box-arrow-up-right.svg';
import work from '../../assets/images/icons/briefcase-fill.svg';
import education from '../../assets/images/icons/book-fill.svg';
import useScrollFade from './useScrollFade';
import { useTranslation } from 'react-i18next';

function ExpCard({data}) {
    const [ref, isVisible] = useScrollFade();
    const {t} = useTranslation();
  return (
    <div className={data.sortOrderId % 2 == 1 ? "exp-card-section d-flex flex-row-reverse container" : "exp-card-section d-flex flex-row container"}>
        <div ref={ref} className={`col-md-5 col-lg-5 col-xl-5 col-12 exp-card pr-2 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="exp-title">
                <h4>{t(data.role)}</h4>
            </div>
            <div className="exp-sub-text">
                <a href={data.url} className="org-link" target='_blank'>
                    {t(data.company) + ' - ' + t(data.location)}
                    <img src={orgLink} className='org-link-logo'></img>
                </a>
                <p className='text-start sub-text-exp'>{data.currentJob ? data.startDate + ' - Present' : data.startDate + ' - ' + data.endDate}</p>
            </div>
            <div className="exp-description">
                <p>{t(data.description)}</p>
            </div>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 col-12">
            <div className={data.sortOrderId % 2 == 1 ? "center-line right" : "center-line left"}>
                <img src={data.id === 3 ? education : work}></img>
            </div>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4 col-12">

        </div>
    </div>
  )
}

export default ExpCard