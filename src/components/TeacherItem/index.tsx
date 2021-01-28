import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEZW82MFJ_Ilw/profile-displayphoto-shrink_200_200/0/1610400018379?e=1617235200&v=beta&t=UC3Imm8sxNVvCkI5Xu9PMrx9BaZb5Dhql3VUluq5Iac" alt="Samuel Franklin"/>
        <div>
          <strong>Samuel Franklin</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        <br/> <br/>
        Magnam explicabo doloribus ipsa tempore cumque, pariatur odio accusamus tempora quis enim fugit mollitia magni commodi natus illo ullam voluptates est maiores.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;