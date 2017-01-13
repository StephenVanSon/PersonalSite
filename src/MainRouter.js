/**
 * Created by Stephen-PC on 1/12/2017.
 */
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import React from 'react';
import About from './modules/About';
import Projects from './modules/Projects';



class MainRouter extends React.Component
{
    render()
    {
       return (
           <Router history={hashHistory}>
               <Route path="/" component={App}>
                   <Route path="/about" component={About}/>
                   <Route path="/projects" component={Projects}/>
               </Route>
           </Router>
       )
    }
}


export default MainRouter;
