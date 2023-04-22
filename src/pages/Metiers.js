import React from 'react'
import { comptencesBase } from '../components/base/competences_base'
import MetierTexte from '../components/MetierTexte'
import MetierImage from '../components/MetierImage'

function Metiers() {
  return (
    <>
    {
      comptencesBase.map((competence, index) => (
        <>
          <div className="flex_titre" style={{justifyContent: `${competence.direction_titre_case}`}}>
            <h1 className='titre_metier'>{competence.titre_case}</h1>
          </div>
          <div className="margin_container" style={{marginBottom: "25px"}}>
            <section className="case_metier" key={index}>
              <MetierTexte
                intro={competence.intro}
                titre={competence.titre}
                descr={competence.descr}
                titre_point={competence.titre_point}
                points={competence.points}
                order_texte={competence.order_texte} />
              <MetierImage
                image={competence.image}
                listes_compe={competence.listes_competences}
                order_image={competence.order_image} />
            </section>
          </div>
        </>
      ))
    }
    </>
  )
}

export default Metiers
