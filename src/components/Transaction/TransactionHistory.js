import PropTypes from 'prop-types';
import Transactions from "./Transactions";
import "./Transaction.css";

function TransactionHistory({ tsTable}) {
    return(
        <table className='transactionHistory'>
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
id:PropTypes.string.isRequired
};

export default TransactionHistory;