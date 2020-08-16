import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeechrItem(){
    return( <article className="teechr-item">
    <header>
        <img src="https://avatars0.githubusercontent.com/u/42080922?s=460&u=ea5835aa0f99713d197bb9737f6a0d0a5b060d66&v=4" alt="Marcio Souza"/>
        <div>
            <strong>Marcio Souza</strong>
            <span>React Js</span>
        </div>
    </header>

    <p>
        Entusiasta das melhores tecnologias ainda não descobertas pela comunidade científica terrestre.
        <br/><br/>
        Responsável pela formação de mais de 200 mil alunos no Alaska.
    </p>

    <footer>
        <p>Preço/Hora
            <strong>80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em Contato
        </button>
    </footer>
</article>)
}

export default TeechrItem;