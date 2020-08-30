import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teechr{
 
    id: number;
    technology: string;
    cost: number;
    time: number;
    maxListeners: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string; 
    
}


interface TeechrItemProps{
    teechr:Teechr;
}


const TeechrItem: React.FC<TeechrItemProps> = ({ teechr }) => {
    return(
        
    <article className="teechr-item">
    <header>
        <img src={teechr.avatar} alt={teechr.name}/>
        <div>
            <strong>{teechr.name}</strong>
            <span>{teechr.technology}</span>
        </div>
    </header>

    <p>
    {teechr.bio}
    </p>

    <footer>
    <p>Capacidade 
        <strong>{teechr.maxListeners} aluno(s)</strong></p>
        <p>Bits!
            <strong>{teechr.cost}</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em Contato
        </button>
    </footer>
</article>)
}

export default TeechrItem;