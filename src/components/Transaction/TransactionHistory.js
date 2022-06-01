import PropTypes from 'prop-types';
import Transactions from "./Transactions";
import t from "./Transaction.module.css";

function TransactionHistory({ tsTable}) {
    return(
        <table className={ t.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {tsTable.map(({id,type,amount,currency }) => ( 
                    <Transactions
                        key={id}
                        type={type}
                        amount={amount}
                        currency={ currency}
                    />
            ))}
            </tbody>
</table>
    )
};

TransactionHistory.propTypes = {
    tsTable: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired
    })
};

export default TransactionHistory;