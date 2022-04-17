import { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

import { BASE_URL } from '../../constants/project';
import { Info } from '../Info';

export const Transactions = ({ user }) => {
  const Web3Api = useMoralisWeb3Api();
  const [transactions, setTransactions] = useState([]);
  const fetchTransactions = async () => {
    try {
      const data = await Web3Api.account.getTransactions({
        chain: 'ropsten',
        address: user.get('ethAddress'),
        limit: 5,
      });
      
      if (data) {
        setTransactions(data.result);
        console.log(transactions);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h3 className='font-semibold text-xl dark:text-white '>Transactions</h3>
      {transactions.length ? (
        <ul>
          {transactions.map((transaction) => (
              <li key={transaction.hash}>
                <a href={`${BASE_URL}${transaction.hash}`}>
                  {transaction.hash}
                </a>
              </li>
            ))}
        </ul>
      ) : (
        <Info infoTitle='No transactions found.' infoText='It seems the list of transactions is empty.' classes='mt-5 ' />
      )}
    </div>
  );
};
