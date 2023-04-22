import React from 'react'

function MetierImage({image, listes_compe, order_image}) {
  return (
    <>
        <div className="metier_image" style={{order: `${order_image}`}}>
            <div className="case_image_compe">
                <img className='image_compe' alt='image_compe' src={image} />
                <div className="compe">
                <h3>Nos Compétences</h3>
                <ul>
                    {
                        listes_compe.map((lsCompe, index) => (
                            <li key={index}>{lsCompe}</li>
                        ))
                    }
                </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default MetierImage
