/**
 * Created by Stephen-PC on 1/17/2017.
 */
import React from 'react';
import About from '../About/About';
import data from '../../data/data';

export default class Contact extends React.Component{
    render(){
        return(
            <About title={data.contact.title} description={data.contact.description}/>
        );
    }
}
