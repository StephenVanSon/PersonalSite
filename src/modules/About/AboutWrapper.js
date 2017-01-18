/**
 * Created by Stephen-PC on 1/17/2017.
 */
import React from 'react';
import data from '../../data/data';
import About from './About';



class AboutWrapper extends React.Component{
    render(){
        return(
            <About description={data.about}/>
        );
    }

}

export default AboutWrapper;