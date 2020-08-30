import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import  './styles.css';

import PageHeader from '../../components/PageHeader';
import TeechrItem, {Teechr} from '../../components/TeechrItem';
import Input from '../../components/Input';
import Select from '../../components/Select';



function TeechrList(){

    const [teechrs,setTeechrs] = useState([])
    const [technology, setTechnology] = useState('');

    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');


    async function searchTeechrs(e:FormEvent){
        e.preventDefault()

        const response = await api.get('classes',{
            params:{
                technology,
                week_day,
                time
            }
        })
        console.log(response.data)
        console.log(technology, week_day,time)
        setTeechrs(response.data)
    }

    return(
           <div id="page-teechr-list" className="container">
               <PageHeader title="Esses são os Teechrs disponíveis">
                    <form id="search-teechrs" onSubmit={searchTeechrs}>
                    <Select  
                        name="technology" 
                        label="Qual a tecnologia?"
                        value={technology} 
                        onChange={(e)=>{ setTechnology(e.target.value) }} 
                        options={[
                            {value:'Javascript', label:'Javascript'},
                            {value:'React', label:'React'},
                            {value:'SQL', label:'SQL'},
                            {value:'React Native', label:'React Native'},
                            {value:'Python', label:'Phyton'},
                            {value:'C', label:'C'}
                        ]}
                    />
                        <Select  
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day} 
                        onChange={(e)=>{ setWeekDay(e.target.value) }}
                        options={[
                            {value:'0', label:'Domingo'},
                            {value:'1', label:'Segunda'},
                            {value:'2', label:'Terça'},
                            {value:'3', label:'Quarta'},
                            {value:'4', label:'Quinta'},
                            {value:'5', label:'Sexta'},
                            {value:'6', label:'Sábado'}
                            

                        ]}
                    />
                        <Input 
                            name="time" 
                            label="Hora"
                            type="time"
                            value={time} 
                            onChange={(e)=>{ setTime(e.target.value) }}/>

                            <button type="submit">Buscar</button>
                    </form>
                </PageHeader>

                <main>

                     {teechrs.map((teechr:Teechr)=>{
                         return(
                             <TeechrItem key={teechr.id} teechr={teechr}/>
                         )
                     })}
                  
                </main>
           </div> 
        )
}

export default TeechrList;