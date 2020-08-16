import React from 'react';
import  './styles.css';
import PageHeader from '../../components/PageHeader';
import TeechrItem from '../../components/TeechrItem';

function TeechrList(){
    return(
           <div id="page-teechr-list" className="container">
               <PageHeader title="Esses são os Teechrs disponíveis">
                    <form id="search-teechrs">
                        <div className="input-block">
                            <label htmlFor="subject">Tecnologia</label>
                            <input type="text" id="subject"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="week_day">Dia da Semana</label>
                            <input type="text" id="week_day"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="time">Hora</label>
                            <input type="text" id="time"/>
                        </div>
                    </form>
                </PageHeader>

                <main>
                   <TeechrItem/>
                   <TeechrItem/>
                   <TeechrItem/>
                   <TeechrItem/>
                   <TeechrItem/>
                </main>
           </div> 
        )
}

export default TeechrList;