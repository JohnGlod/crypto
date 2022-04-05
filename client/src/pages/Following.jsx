import React from 'react'
import { CustomContainer, Transactions } from '../components'
import { useMoralis } from 'react-moralis';

export const Following = () => {
  const { user } = useMoralis();
  return (
    <CustomContainer>
      <Transactions user={user} />
    </CustomContainer>
  )
}
