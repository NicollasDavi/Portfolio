
import styles from "./Biography.module.css"
import { FaHtml5, FaCss3Alt,FaJs, FaReact, FaBootstrap, FaNode} from "react-icons/fa";


const Biography = () => {
    return (
        <div id='about'>
            <div className={styles.txt}>
                <h3>Biografia</h3>
                <h1>Quem eu sou?</h1>
            </div>
            <div className={styles.aboutContain}>
                <div className={styles.me}>
                    <section >
                        <img src="" alt="" className=''/>
                    </section>
                    <section>
                        <h1>Nicollas Davi</h1>
                        <p>Sou Nicollas, profissional Full-Stack com experiência em [destacar principais competências]. Ao longo da minha trajetória, contribuí para o sucesso de projetos notáveis, demonstrando habilidades sólidas em [listar competências específicas]. Com uma abordagem focada em resultados, estou comprometido em impulsionar a excelência e agregar valor em ambientes desafiadores. Busco oportunidades que permitam aplicar minha expertise e liderar iniciativas inovadoras.</p></section>
                </div>
                <div className={styles.me}>
                    <section>
                        <h1>Soft Skilss</h1>
                    </section>
                    <section>Hard Skills</section>
                    <section>
                        <FaHtml5 className={styles.icon}/>
                        <FaCss3Alt className={styles.icon}/>
                        <FaJs className={styles.icon}/>
                        <FaReact className={styles.icon}/>
                        <FaBootstrap className={styles.icon}/>
                        <FaNode className={styles.icon}/>
                    </section>      
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Biography