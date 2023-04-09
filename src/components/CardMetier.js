import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CardMetier({titre,para}) {
  return (
    <>
        <div className="card_metier">
            <h2 className="titre_card">{titre}</h2>
            <p className="para_card">{para}</p>
            <button className='btn_card_metier'>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    </>
  )
}

export default CardMetier
