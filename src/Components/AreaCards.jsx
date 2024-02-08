import ProjectCard from "./ProjectCard"
import styles from "./AreaCards.module.css"


const AreaCards = () => {
    return(
        <div className={styles.AreaCards}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}

export default AreaCards