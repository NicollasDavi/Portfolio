import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <div id="contact">
            <p className={styles.BeforeTitle}>Informações de contato</p>
            <div className={styles.title}>
                <h1>Entrar em contato</h1>
            </div>
            <div className={styles.form}>
                <form action="">
                    <section className={styles.flex}>
                        <section>
                            <label htmlFor="Name"></label>
                            <input type="text" name="Name" id="Name" placeholder="Nome" className={styles.input} />
                        </section>
                       <section>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder="Email" className={styles.input} />
                       </section>
                    </section>
                    <label htmlFor="Objetivo"></label>
                    <input type="text" name="Objetivo" id="Objetivo" placeholder="Titulo"  className={styles.input}/>
                    <label htmlFor="Objetivo"></label>
                    <textarea placeholder="Menssagem" className={styles.input}/>
                </form>
                <button>Enviar Menssagem</button>
            </div>

        </div>
    )
}

export default Contact