import React from 'react'

export const Avatar = ({imgSrc, name = 'Mia Ayana'}) => {
  return (
    <div>
      <img src="https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg" alt="my avatar" />
      <h5>{name}</h5>
    </div>
  )
}
