import styles from "./ProjectCard.module.css"

const ProjectCard = () => {
    return(
        <div className={styles.Card}>
            <div className={styles.CardContain}>
                <section className={styles.CardTop}>
                    <button className={styles.HoverBtn}><a href="">Link</a></button>
                    <button className={styles.HoverBtn}><a href="">Repositorio</a></button>
                </section>
                <section className={styles.CardBottom}>
                    <h1>Titulo</h1>
                    <p>Descrição</p>
                    <section></section>
                </section>
            </div>
        </div>
    )
}

export default ProjectCard