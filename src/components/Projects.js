import React from 'react'
import projectData from '../assets/projectsData.json'
import github from '../assets/github.png'

const Projects = () => {
    return (
        <div style={{minHeight:'100vh', overflow: 'hidden'}}>
            <div className="three-dee">Projects</div>
            <div className="project_container" >
            {Object.keys(projectData.projects).map((data, index) => {
                return(
                    <div className="project" key={index}> 
                        <h4>{data} <a style={{color:'#AE7FC3'}}href={projectData.projects[data]['link']} target='_blank' rel="noopener noreferrer"><img src={github} width='20px'/></a></h4>
                        <p>{projectData.projects[data]['start_date']} - {projectData.projects[data]['end_date']}</p>
                        <p>{projectData.projects[data]['description']}</p>
                        
                        <p> Tech Stack: 
                        {projectData.projects[data]['tech_stack'].map(tech => {
                            return (
                                <span> {tech} | </span>
                            )
                        })}
                        </p>
                        <br/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Projects;