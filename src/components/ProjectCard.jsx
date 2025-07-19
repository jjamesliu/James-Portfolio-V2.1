import'./ProjectCard.css'
import { Button } from '@/components/ui/button'
import { Github, Globe } from 'lucide-react';



function ProjectCard(props) {
 return (
    <>  
        <section className="project-container">

        <div className="projectContainer">
            <div className="projectElement">
                <div className = "projectImg">
                    <img src={props.img}/>
                </div>
                <div>


                <a className="projectTitle" href={props.link} target="_blank">{props.title}</a>

                <p>
                    {props.description}
                </p>
                </div>
                <a href={props.github_repo} target="_blank">
                <Button variant="default" 
                className='!mr-[0.5rem] !mt-[0.8rem]'><Github />GitHub</Button></a>
                <a href={props.link} target="_blank">
                <Button variant="default"
                className='!mr-[0.5rem] !mt-[0.8rem]'><Globe />Website</Button></a>

            </div>

        </div>
        </section>
    </>
 )
}

export default ProjectCard