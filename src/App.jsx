import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListOfGifts from './components/ListOfGifts'
import AddGift from './components/AddGift'

const App = () => {
  const GIFTS = 'gifts'
  const [gifts, setGifts] = useState([])

  useEffect(() => {
    setGifts(JSON.parse(localStorage.getItem(GIFTS)) || [])
  }, [])

  const addGift = (gift) => {
    const maxId = Math.max(0, ...gifts.map((gift) => gift.id))
    const updatedGifts = [...gifts, { ...gift, purchased: false, id: maxId + 1 }]
    localStorage.setItem(GIFTS, JSON.stringify(updatedGifts))
    setGifts(updatedGifts)
  }

  const deleteGift = (id) => {
    const updatedGifts = gifts.filter((gift) => gift.id !== id)
    localStorage.setItem(GIFTS, JSON.stringify(updatedGifts))
    setGifts(updatedGifts)
  }

  const togglePurchaseGift = (id) => {
    const updatedGifts = gifts.map((gift) => (gift.id === id ? { ...gift, purchased: !gift.purchased } : gift))
    localStorage.setItem(GIFTS, JSON.stringify(updatedGifts))
    setGifts(updatedGifts)
  }

  const total = gifts.reduce((acc, gift) => acc + +gift.price, 0)
  const remaining = gifts.reduce((acc, gift) => acc + (gift.purchased ? 0 : +gift.price), 0)

  return (
    <>
      <Header totalPrice={total} remainingPrice={remaining} />
      <ListOfGifts gifts={gifts} onDelete={deleteGift} onPurchase={togglePurchaseGift} />
      <AddGift onAdd={addGift} />
    </>
  )
}

export default App

/*
  App <<<<
    Header ------- no sembla que necessiti accés a estat
    ListOfGifts -- necessita accés a l'estat (array idees)
      Gift (map) - (estrictament, no necessita estat, però tant és, perquè el seu pare en té)
    AddGift ------ voldrà afegir un element (objecte) a l'estat
*/
