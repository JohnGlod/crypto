import React from 'react'
import { useMoralis } from 'react-moralis';

import { CustomContainer} from '../containers/CustomContainer'
import { Transactions} from '../components/Transactions'

export const Following = () => {
  const { user } = useMoralis();
  return (
    <CustomContainer>
      <Transactions user={user} />
    </CustomContainer>
  )
}
