/**
 * Formatting a name in HEX to a shorter one, if the name is not in HEX, returns the original name.
 * @example
 * // returns '0x3b ... f8b4'
 * changeTokensLongName('0x3bf013054d1ce9a1f20d86207d2f2e37e9a3f8b4');
 * @example
 * // returns 'Mia Ayana'
 * changeTokensLongName('Mia Ayana');
 * @param  {string} name
 */

export const changeTokensLongName = (name) => {
  if (!name.startsWith('0x')) return name;
  return `${name.slice(0, 4)} ... ${name.slice(-4)}`;
};

/**
 * A wrapper function that passes the call to func at most once per ms milliseconds.
 * @callback requestCallback
 * @param {requestCallback} func - The callback that handles the response.
 * @param {number} delay  
 */

export const debounce = (func, delay) => {
  let timeout;

  return function () {
    const fnCall = () => func.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, delay);
  };
};

/* 

my src="https://gateway.ipfs.io/QmfPkuG8SBWYLm9FJZuwarz7wsDjEmW8kx6WKt8HyiAThD/nft.jpg" 
https://gateway.pinata.cloud/ipfs/QmQxAKt97XYRSeqWn2tiFdvBavfSoV5cBucfzW3qVUyze7
*/
