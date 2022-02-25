import React from 'react'
import { CustomContainer, NFT, Transactions } from '../components'
import { useMoralis } from 'react-moralis';

export const Following = () => {
  const { user } = useMoralis();
  return (
    <CustomContainer>
      <Transactions user={user} />
      <NFT user={user} />
    </CustomContainer>
  )
}
