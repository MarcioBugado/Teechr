import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from "./pages/Landing";
import TeechrList from "./pages/TeechrList";
import TeechrForm from "./pages/TeechrForm";


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeechrList}/>
            <Route path="/give-classes" component={TeechrForm}/>

        </BrowserRouter>
    )
}

export default Routes;