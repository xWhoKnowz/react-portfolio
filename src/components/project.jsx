import github from '../../Assets/github.png'

export default function Project(props) {
  console.log(props);

  return (
    <>
    <section className="projectCard col-sm-12 col-md-12 col-lg-6">
      <h2 className="projectTitle">{props.project.title}</h2>
      <a href={props.project.link}>
        <img
          className="project"          
          src={props.project.img}
        />
      </a>
      <a href={props.project.repo}>
        <img className='github' src={github}/>
      </a>
    </section>
    
    </>
  );
}
