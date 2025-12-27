import React from 'react'
import sticker1 from '../../src/assets/sticker1.png'
import sticker2 from '../../src/assets/sticker2.png'
import sticker3 from '../../src/assets/sticker3.png'

const Stickers = () => {
  return (
    <div className='stickers'>
      <img src={sticker1} />
       <img src={sticker2}/>
        <img src={sticker3} />
    </div>
  )
}

export default Stickers