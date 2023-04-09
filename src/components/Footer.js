import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div></div>
        <div className='sociaux'>
            <h3>Contact</h3>
            <div className='case_icon'>
                <FontAwesomeIcon icon={faLink} />
                <FontAwesomeIcon icon={faLink} />
            </div>
        </div>
        <div className='info_footer'>
            <p>Mentions légales</p>
            <p>Politique de confidentialité</p>
            <p>Politique de cookie</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
