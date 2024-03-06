import myResume from '../../assets/JeremiahHaleResume.pdf'

export default function Resume() {
    
    return (
        <main>
            <section className="resume">
            <a href={myResume}>
            <h2 className="link">Resume</h2>
            </a>
            <h3 className="prof">Front End Proficiencies</h3>
            <ul className="list">
                <li>&bull; HTML</li>
                <li>&bull; CSS</li>
                <li>&bull; JavaScript</li>
                <li>&bull; JQuery</li>
                <li>&bull; Bootstrap</li>
                <li>&bull; React</li>
                <li>&bull; Responsive Design</li>
            </ul>
            <h3 className="prof">Back End Proficiencies</h3>
            <ul className="list">
                <li>&bull; API's</li>
                <li>&bull; Node</li>
                <li>&bull; Express</li>
                <li>&bull; MySQL, Sequelize</li>
                <li>&bull; GraphQl</li>
                <li>&bull; MongoDB/Mongoose</li>
                <li>&bull; PWA</li>
            </ul>
            </section>
        </main>
    )
}