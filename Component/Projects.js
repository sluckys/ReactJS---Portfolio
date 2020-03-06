import React, {Component} from 'react';
import PROJECTS from '../data/project';

   const Project =props => {
        const {title, image , description, link} = props.project;
        
        return(
            <div style={{ display: 'inline-block', width: 300,margin:10}}>
                <h3>{title}</h3>
                <img src={image} alt = 'profile'  style={{ width:200, height:100}}/>
                <p>{description}</p>
                <a href={link} style={{ fontSize:18}}>{link}</a>
            </div>
        )
    }

const Projects = () =>(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        
                        PROJECTS.map( PROJECT =>{   
                            return(
                                <Project key={PROJECT.id} project = {PROJECT} />
                            );
                        })
                    }
                </div>
            </div>

        )
    

export default Projects;