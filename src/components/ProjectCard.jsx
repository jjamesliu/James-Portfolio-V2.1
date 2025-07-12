import'./ProjectCard.css'

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
            </div>



        </div>
        </section>
    </>
 )
}

export default ProjectCard