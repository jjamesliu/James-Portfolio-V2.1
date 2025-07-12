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
                <Button variant="default" 
                className='!mr-[0.5rem] !mt-[0.4rem] !px-[2rem] gap-1'>
                <Github />GitHub</Button>
                <Button variant="default"
                className='!mr-[0.5rem] !mt-[0.4rem] !px-[2rem] gap-1'> <Globe />Website</Button>
            </div>

        </div>
        </section>
    </>
 )
}

export default ProjectCard