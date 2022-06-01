import s from './Staristic.module.css';

function Statistic({ label,percentage}) {
    return (
        <li style={{ backgroundColor: getRandomHexColor() }} className={s.item}>
            <span className={ s.labelStat}>{ label}</span>
            <span className={ s.percentage}>{ percentage}</span>
        </li>
    );
};

export default Statistic;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};