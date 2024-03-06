import Project from "../components/project"
import myQueue from "../../assets/myQueue.jpg"
import freshTomatoes from "../../assets/freshTomatoes.jpg"
import jate from "../../assets/jate.jpg"
import weatherDashboard from "../../assets/weatherDashboard.jpg"
import noteTaker from "../../assets/noteTaker.jpg"
import workDayPlanner from "../../assets/workDayPlanner.jpg"

const projects = [
    {
      title: `My Queue`,
      img: myQueue,
      link: ` https://xwhoknowz.github.io/event-tracker/index.html`,
      repo: `https://github.com/xWhoKnowz/event-tracker`,
    },
    {
      title: `Fresh Tomatoes`,
      img: freshTomatoes,
      link: ` https://immense-stream-80109-ca7e7e405a25.herokuapp.com/`,
      repo: `https://github.com/xWhoKnowz/movie-club`,
    },
    {
      title: `J.A.T.E.`,
      img: jate,
      link: `https://jate-n53h.onrender.com/`,
      repo: `https://github.com/xWhoKnowz/jate`,
    },
    {
      title: `Weather Dashboard`,
      img: weatherDashboard,
      link: `https://xwhoknowz.github.io/weather-dashboard/`,
      repo: `https://github.com/xWhoKnowz/weather-dashboard`,
    },
    {
      title: `Note Taker`,
      img: noteTaker,
      link: `https://sheltered-caverns-53548-b8da6c4310bd.herokuapp.com/`,
      repo: ` https://github.com/xWhoKnowz/note-taker`,
    },
    {
      title: `Work Day Planner`,
      img: workDayPlanner,
      link: ` https://github.com/xWhoKnowz/Work-Day-Planner`,
      repo: ` https://xwhoknowz.github.io/Work-Day-Planner/`,
    },
  ];

export default function Portfolio() {
    
    return (
        <main className="portfolio d-flex flex-wrap justify-content-center">
            {projects.map((project)=>(
                <Project key={project.title} project={project}/>
            ))}
        </main>
    )
}