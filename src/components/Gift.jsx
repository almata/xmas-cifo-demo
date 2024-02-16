import React from 'react'

const Gift = ({ id, person, idea, price, purchased, onDelete, onPurchase }) => {
  return (
    <div className={`gift-layout ${purchased ? 'gift-purchased' : ''}`}>
      <div className='gift-action'>
        <button onClick={() => onPurchase(id)}>💸</button>
      </div>
      <div className='gift'>
        <p className='gift-idea'>
          {idea} – {price} €
        </p>
        <p className='gift-person'>{person}</p>
        <p className='gift-price'>
          {Array(Math.ceil(price / 20))
            .fill()
            .map((_) => '💰')}
        </p>
      </div>
      <div className='gift-action'>
        <button onClick={() => onDelete(id)}>🗑</button>
      </div>
    </div>
  )
}

export default Gift
