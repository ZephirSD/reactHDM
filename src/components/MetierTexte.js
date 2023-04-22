import React from 'react'

function MetierTexte({intro, titre, descr, titre_point, points, order_texte}) {
  return (
    <>
      <div className="metier_texte" style={{order: order_texte}}>
            <p>{intro}</p>
            <h2>{titre}</h2>
            <p>{descr}</p>
            <div className="case_flex_point">
            <div className="case_liste_point">
                <p>{titre_point}</p>
                <ul>
                    {
                        points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))
                    }
                </ul>
            </div>
            </div>
        </div>
    </>
  )
}

export default MetierTexte
