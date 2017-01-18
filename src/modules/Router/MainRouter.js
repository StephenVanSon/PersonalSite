/**
 * Created by Stephen-PC on 1/12/2017.
 */
import {Router, Route, hashHistory} from 'react-router';
import App from '../../App';
import React from 'react';
import AboutWrapper from '../About/AboutWrapper';
import Projects from '../Projects/Projects';
import WorkExperience from '../WorkExperience/WorkExperience';



class MainRouter extends React.Component
{
    render()
    {
       return (
           <Router history={hashHistory}>
               <Route path="/" component={App}>
                   <Route path="/about" component={AboutWrapper}/>
                   <Route path="/projects" component={Projects}/>
                   <Route path="/work" component={WorkExperience}/>
               </Route>
           </Router>
       )
    }
}


export default MainRouter;
