import PropTypes from 'prop-types';

function Transactions({ type,amount,currency}) {
    return (
                <tr>
            <th>{ type}</th>
            <th>{ amount}</th>
            <th>{ currency}</th>
                </tr>
    )
};

Transactions.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
};

export default Transactions;