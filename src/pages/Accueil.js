import React from 'react'
import CardMetier from '../components/CardMetier'
import { metiers } from '../components/base/metier_base'

function Accueil() {
  return (
    <>
      <div className="container_recue">
        <div className='case_recrue_pop'>
            <h2 className="titre_recrue_pop">Lorem, ipsum dolor.</h2>
            <p className="para_recrue_pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, praesentium.</p>
            <button className="btn_recrue_pop">Accéder à nos offres d'emploi</button>
        </div>
      </div>
      <div className="a_propos">
        <div className="margin_container">
            <div className="grid_a_propos">
                <div className="texte_a_propos">
                    <h2 className="titre_a_propos">Lorem ipsum dolor sit.</h2>
                    <h3 className="sous_titre_a_propos">Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    <p className="intro_a_propos">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse commodi vitae veniam illum neque libero omnis vel dolorum sit dicta ab soluta suscipit beatae minima maiores non, maxime quaerat quam. Est doloremque odio iusto quaerat.</p>
                    <p className="para_a_propos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae voluptatibus consequatur tempore magni, blanditiis repellat mollitia officia commodi obcaecati nulla sed necessitatibus. Voluptates quibusdam possimus minus eius nesciunt harum quas dicta distinctio tenetur vero fuga, officiis sapiente dolorem libero labore autem molestias illo beatae.</p>
                </div>
                <div className="image_a_propos"></div>
            </div>
        </div>
      </div>
      <div className="case_metier">
        <div className="margin_container">
            <h2 className="titre_metier">Nos Métiers</h2>
            <p className="synt_metier">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione molestias fugit harum enim voluptatibus.</p>
            <div className="grid_card_metier" style={{gridTemplateColumns: `repeat(${metiers.length},1fr)`}}>
                {
                    metiers.map((metier, index) => (
                        <CardMetier key={index} titre={metier.titre} para={metier.para}/>
                    ))
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default Accueil
