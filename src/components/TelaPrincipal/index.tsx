import { Container, DivImgText } from "./style"
import eujpg from "../../assets/pedro2.png"
import { motion } from "framer-motion"

export function TelaPrincipal () {
    return (
    <Container>
        <DivImgText>
          <motion.div
        className="side-text"
        initial={{opacity: 0, y: -250}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.4, delay: 1.2}}
        >
            Olá! Tudo bem? <br /> 
            Meu nome é <br /> <span style={{color: "#ffdb63"}}> Pedro Henrique </span> <br />
            e sou estudante de <span style={{color: "#ffdb63"}}> Ciência da Computação </span> na UFBA.
          </motion.div>

         <motion.img src={eujpg} 
         alt="eu"
         initial={{ opacity: 0, y: 250 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         whileHover={{
            scale: 1.25,
            transition: { duration: 0.2}
         }}
         />
          <motion.div 
          className="side-text"
          initial={{opacity: 0, y: -250}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, delay: 1.2}}>
            Muito prazer em te conhecer! Caso queira entrar
            em <span style={{color: "#ffdb63"}}> contato </span> ou ver <span style={{color: "#ffdb63"}}> meus projetos</span>, fique à vontade!
          </motion.div>
        </DivImgText>

        <motion.div
        className="buttons"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        >
            <button type="button" onClick={() => {
                window.open("https://github.com/pedrohpmsdev", '_blank')}}>
                My GitHub.
            </button>

            <button type="button" onClick={() => {
                window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pedrokhpms@gmail.com", '_blank')}}>
                Contact Me.
            </button>
        </motion.div>
    </Container>
    )
}

