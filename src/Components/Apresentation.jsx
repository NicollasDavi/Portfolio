
import styles from "./Apresentation.module.css"
import {FaLinkedin } from "react-icons/fa";
import {SiGithub } from "react-icons/si";


const Apresentation = () => {
    return (
        <div id='home' className={styles.home}>
            <div className={styles.cont}>
                <div className={styles.center}>
                    <div className={styles.hay}>
                        <h1>Ola <span>.</span></h1>
                    </div>
                    <div  className={styles.name}>
                        <span>___</span>
                        <h3>Eu sou Nicollas Davi</h3>
                    </div>
                    <br />
                    <div className={styles.about}>
                        <p>Desenvolvedor Full-Stack</p>
                    </div>
                    <div className={styles.iconsL}>
                        <a href="https://www.linkedin.com/in/nicollas-davi-85958b27a/" target="_blank" rel="noopener noreferrer"><FaLinkedin  className={styles.icon}/></a>
                        <a href="https://github.com/NicollasDavi" target="_blank" rel="noopener noreferrer"><SiGithub className={styles.icon}/></a>
                        
                    </div>
                    <div>
                        <button>Dowload CV</button>
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default Apresentation