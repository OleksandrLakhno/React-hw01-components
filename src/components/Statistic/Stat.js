import PropTypes from 'prop-types';
import Statistic from './StatList';
import './Staristic.css';

function StatList({title, data }) {
    return (
        <section className='statistics'>
            {title && <h2 className='title'>{title}</h2>}
            <ul className='statList'>
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
    title: PropTypes.string.isRequired,
    data:PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired
    })
};

export default StatList;