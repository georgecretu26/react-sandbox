import React, { Component } from 'react';

import Card from './../../components/card/card';
import axios from 'axios';

const projects = [
    {
        id: 1, 
        title: 'Website Project', 
        imgSrc:'https://dummyimage.com/mediumrectagle/d60bd6/ffffff&text=Website+react+JS', 
        dateOfPublish: '26th of March, 2018', 
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi ullam minima natus sequi porro ab eum nostrum necessitatibus nihil, numquam praesentium nobis dolore, expedita pariatur, dolorum sed error at."
    },
    {
        id: 2, 
        title: 'Mobile Project', 
        imgSrc:'https://dummyimage.com/mediumrectagle/d60bd6/ffffff&text=Mobile+react+JS', 
        dateOfPublish: '12th of April, 2018', 
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi ullam minima natus sequi porro ab eum nostrum necessitatibus nihil, numquam praesentium nobis dolore, expedita pariatur, dolorum sed error at."
    },
]

class Projects extends Component{
    constructor(){
        super();
        this.state = {
            projects: projects,
        };
    }

    componentWillMount(){
        axios.get('http://localhost:8000/project/')
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    renderProjects(obj){
        if(obj.length > 0){
            obj.map(project => (
                <Card key={project.id} props={project} />
            ))
        }
    }
    render(){
        console.log('state', this.state);
        
        return(
            <div>
                {this.state.projects.length > 0 && this.state.projects.map(project => (
                    <Card key={project.id} props={project} />
                ))}
            </div>
        )
    }
}

export default Projects;