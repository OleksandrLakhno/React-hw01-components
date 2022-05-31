import './Staristic.css';

function Statistic({ label,percentage}) {
    return (
        <li style={{backgroundColor:getRandomHexColor()}} className='item'>
            <span className='labelStat'>{ label}</span>
            <span className='percentage'>{ percentage}</span>
        </li>
    );
};

export default Statistic;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};