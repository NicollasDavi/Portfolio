import AreaCards from "./AreaCards"
import styles from "./Projects.module.css"


const Projects = () => {
    return (
        <div id='projects' className={styles.projects}>
            <div>
                <h1>Projetos</h1>
                <section></section>
            </div>
            <div>
                <AreaCards />
            </div>
        </div>
    )
}

export default Projects