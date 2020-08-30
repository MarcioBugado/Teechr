import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/Teechr2.svg';


interface PageHeaderProps{
    title: string;
    description?: string
}

const PageHeader: React.FC <PageHeaderProps> = (props) =>{
    return(
        <header className="page-header">
                   <div className="top-bar-container">
                       <Link to="/">
                           <img src={backIcon} alt="Voltar"/>
                       </Link>
                       <img src={logoImg} alt="Teechr"/>
                   </div>

                    <div className="header-content">
                        <strong>{props.title}</strong>
                        {props.description && <p>{props.description}</p>}
                        
                        {props.children}

                    </div>
               </header>
    )
}

export default PageHeader;