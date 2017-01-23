/**
 * Created by Stephen-PC on 1/17/2017.
 */
import React from 'react';
import data from '../../data/data';
import About from './About';



class AboutWrapper extends React.Component{
    render(){
        let components = [<About description={data.about.desc} title={data.about.title} key="aboutMe"/>];
        if(!this.props.dontRenderAboutSite){
            components.push(<About description={data.aboutSite.desc} title={data.aboutSite.title} key="aboutSite"/>);
        }

        return(
            <div>
                {components}
            </div>
        );
    }

}

export default AboutWrapper;