import { useState } from 'react'

const AddGift = ({ onAdd }) => {
  const emptyIdea = { person: '', idea: '', price: 1 }

  const [idea, setIdea] = useState(emptyIdea)

  const submitIdea = (e) => {
    e.preventDefault()

    onAdd(idea)

    setIdea(emptyIdea)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setIdea({ ...idea, [id]: value })
  }

  return (
    <div className='add-gift-form'>
      <h2>Any good idea...?</h2>

      <form onSubmit={submitIdea}>
        <div className='form-control'>
          <label htmlFor='idea'>What's it about...?</label>
          <input id='idea' type='text' placeholder='Gift idea' value={idea.idea} onChange={handleChange} />
        </div>

        <div className='form-control'>
          <label htmlFor='person'>Who is this for...?</label>
          <input id='person' type='text' placeholder='John Doe' value={idea.person} onChange={handleChange} />
        </div>

        <div className='form-control form-control-slider'>
          <label htmlFor='price'>How much will it be...? {idea.price} €</label>
          <input id='price' type='range' min='1' max='200' value={idea.price} onChange={handleChange} />
        </div>

        <input type='submit' className='form-button' value='Cool idea... save it' />
      </form>
    </div>
  )
}

export default AddGift
