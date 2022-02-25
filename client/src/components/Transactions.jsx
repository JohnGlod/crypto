import React, { useState } from 'react';
import { useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

export const Transactions = ({user}) => {
 
  const Web3Api = useMoralisWeb3Api();
  const BASE_URL = 'https://ropsten.etherscan.io/tx/';

  const [transactions, setTransactions] = useState();
  const fetchTransactions = async () => {
    try {
      const data = await Web3Api.account.getTransactions({
        chain: 'ropsten',
        address: user.get('ethAddress'),
        limit: 5,
      });
      console.log(data);
      if (data) {
        setTransactions(data.result);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h3 className='font-semibold text-xl dark:text-white '>Transactions</h3>
      <ul>
        {transactions &&
          transactions.map((transaction) => (
            <li key={transaction.hash}>
              <a href={`${BASE_URL}${transaction.hash}`}>{transaction.hash}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};
