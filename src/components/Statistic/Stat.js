import PropTypes from 'prop-types';
import Statistic from './StatList';
import s from'./Staristic.module.css';

function StatList({title, data }) {
    return (
        <section className={ s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={ s.statList}>
                {data.map(({ id, label, percentage }) => (
                    <Statistic key={id}
                        label={label}
                        percentage={ percentage}
                    />
                ))}
            </ul>
        </section>
    );
    
};

StatList.propTypes = {
    title: PropTypes.string,
    data:PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired
    })
};

export default StatList;