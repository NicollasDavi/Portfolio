
import styles from "./Biography.module.css"
import { FaHtml5, FaCss3Alt,FaJs, FaReact, FaBootstrap, FaNode, FaSass, FaPython, FaAws} from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiTailwindcss,SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { DiMysql, DiPostgresql } from "react-icons/di";





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
                        <h1>Soft Skills</h1>
                        <p>Destaco-me por habilidades interpessoais sólidas, incluindo comunicação eficaz e empatia, essenciais para colaboração em equipe. Abordo desafios com criatividade, proporcionando soluções inovadoras. Minha flexibilidade e adaptabilidade me permitem prosperar em ambientes dinâmicos. Essas soft skills fortalecem a dinâmica de grupo, contribuindo para o sucesso em projetos colaborativos. Estou constantemente aprimorando essas habilidades para agregar valor em diversos contextos profissionais.</p>
                    </section>
                    <section>
                        <h1>Hard Skills</h1></section>
                    <section>
                        <FaHtml5 className={styles.icon}/>
                        <FaCss3Alt className={styles.icon}/>
                        <FaJs className={styles.icon}/>
                        <SiTypescript className={styles.icon}/>
                        <FaPython className={styles.icon}/>
                        <FaReact className={styles.icon}/>
                        <FaBootstrap className={styles.icon}/>
                        <FaSass className={styles.icon}/>
                        <SiTailwindcss className={styles.icon}/>
                        <FaNode className={styles.icon}/>
                        <TbBrandVite className={styles.icon}/>
                        <DiMysql className={styles.icon}/>
                        <DiPostgresql className={styles.icon}/>
                        <SiMongodb className={styles.icon}/>
                        <SiExpress className={styles.icon}/>
                        <FaAws className={styles.icon}/>
                    </section>      
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Biography