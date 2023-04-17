import React from 'react'
import { Button, Input, Textarea } from '../components/Formulaire'
import CarteContact from '../components/CarteContact'

function Contact() {
  return (
    <>
        <div className="margin_container">
            <section className="grid_contact">
                <div className="formulaire">
                    <Input type='text' id={'nom'} placeholder={'Votre nom'} label={'Nom:*'}/>
                    <Input type='text' id={'prenom'} placeholder={'Votre prénom'} label={'Prénom:*'}/>
                    <Input type='email' id={'email'} placeholder={'exemple@mail.fr'} label={'Email:*'}/>
                    <Input type='text' id={'objet'} placeholder={`L'objet de votre message`} label={'Objet:*'}/>
                    <Textarea label={'Message:*'} id={'message'} placeholder={'Votre message'} maxLength={'250'}/>
                    <Button value={'Envoyer'} id={'envoyer'} />
                </div>
                <div className="carte">
                  <CarteContact/>
                </div>
            </section>
        </div>

    </>
  )
}

export default Contact
