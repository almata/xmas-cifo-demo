import React from 'react'
import Gift from './Gift'

const ListOfGifts = ({ gifts, onDelete, onPurchase }) => {
  return (
    <>
      {gifts
        .sort((gift1, gift2) => gift2.price - gift1.price)
        .map((gift) => (
          <Gift
            key={gift.id}
            id={gift.id}
            person={gift.person}
            idea={gift.idea}
            price={gift.price}
            purchased={gift.purchased}
            onDelete={onDelete}
            onPurchase={onPurchase}
          />
        ))}
    </>
  )
}

export default ListOfGifts
