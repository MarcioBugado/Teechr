import React, {useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeechrForm(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [technology, setTechnology] = useState('');
    const [cost, setCost] = useState('');
    const [time, setTime] = useState('');
    const [maxListeners, setMaxListeners] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        {week_day:0, from:'', to:''}
    ])

    
    function setScheduleItemValue(position: number, field: string, value:string){
        const updatedScheduleItens = scheduleItems.map((scheduleItem,index )=>{
          if (index === position){
              return {...scheduleItem, [field]: value}
          }  

          return scheduleItem;
        })
        setScheduleItems(updatedScheduleItens);
        console.log(updatedScheduleItens)
        console.log(scheduleItems)
    }

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day:0, from:'', to:''}
        ])
    }

    function removeScheduleItem(){
        setScheduleItems([
            {week_day:0, from:'', to:''}
        ])
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();
       api.post('classes',{
            name,
            technology,
            avatar,
            whatsapp,
            bio,
            cost: Number(cost),
            maxListeners:Number(maxListeners),
            time:Number(time),
            schedule: scheduleItems, 
        }).then(()=>{
            alert('Cadastro realizado com sucesso!')
            history.push('/')
        }).catch((error)=>{
            alert('Ops, tivemos um problema! Tente novamente.')
        })
    }

    return(
        <div id="page-teechr-form" className="container">

            <PageHeader title="Que incrível que você quer dar aulas!" description="O primeiro passo é preencher o formulário abaixo."/>


            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input 
                        name="name" 
                        label="Seu nome completo" 
                        value={name} 
                        onChange={(e)=>{ setName(e.target.value) }}/>

                    <Input 
                        name="avatar" 
                        label="Link do seu avatar" 
                        value={avatar} 
                        onChange={(e)=>{ setAvatar(e.target.value) }}/>

                    <Input 
                        name="whatsapp" 
                        label="Whatsapp" 
                        value={whatsapp} 
                        onChange={(e)=>{ setWhatsapp(e.target.value) }}/>

                    <Textarea 
                        name="bio" 
                        label="Biografia"  
                        value={bio} 
                        onChange={(e)=>{ setBio(e.target.value) }} />

                </fieldset>

                <fieldset>
                    <legend>Sobre a sua aula!</legend>

                    
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

                    <Input 
                        name="cost" 
                        label="Quantos pontos cuta a sua aula?"
                        value={cost} 
                        onChange={(e)=>{ setCost(e.target.value) }} />
                   
                    <Input 
                        name="time" 
                        label="Duração"
                        value={time} 
                        onChange={(e)=>{ setTime(e.target.value) }} />
                   
                    <Input 
                        name="maxListeners" 
                        label="Quantos podem assistir"
                        value={maxListeners} 
                        onChange={(e)=>{ setMaxListeners(e.target.value) }} />

                </fieldset>

                <fieldset>
                    <legend>Horários Disponíveis
                        <button type="button" onClick={removeScheduleItem}>
                             Limpar
                        </button>
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>
                    
                   {scheduleItems.map((scheduleItem, index) =>{
                       return (
                        <div key={scheduleItem.week_day} className="schedule-item">
                        
                        <Select  
                            name="week_day" 
                            label="Dia da Semana"
                            value={scheduleItem.week_day}
                            onChange={e=> setScheduleItemValue(index, 'week_day', e.target.value)}
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
                            type="time" 
                            name="from" 
                            label="Das"
                            value={scheduleItem.from}
                            onChange={e=> setScheduleItemValue(index, 'from', e.target.value)}/>
                       
                        <Input 
                            type="time" 
                            name="to" 
                            label="Até"
                            value={scheduleItem.to}
                            onChange={e=> setScheduleItemValue(index, 'to', e.target.value)}
                            />
    
    
                        </div>
                       )
                   })}
                    
                </fieldset>




                <footer>
                    
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados.
                    </p>

                    <button type="submit">
                        Salvar Cadastro
                    </button>
                </footer>

                </form>
            </main>





        </div>
    )
}

export default TeechrForm;

