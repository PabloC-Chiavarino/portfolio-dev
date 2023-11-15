import fadeInAnimation from '../../constants/fadeInAnimation'
import { motion } from 'framer-motion'
import { LkdIcon, gitHubIcon } from '../../assets/ico'

import './styles.css'

const NavMenu = () => {
    return (
        <>
            <motion.ul
                initial="hidden"
                animate="visible"
                transition={{ delay: 3, staggerChildren: '0.25' }}
                className='index-container'
            >
                <motion.li
                    variants={fadeInAnimation}
                    className='list-item'
                >
                    <a href="#about" >
                        <span className='flex-item' data-to-scrollspy-id='about'>
                            <hr />
                            <h4 className='item-title' >ABOUT</h4>
                        </span>
                    </a>
                </motion.li>
                
                <motion.li
                    className='list-item'
                    variants={fadeInAnimation}
                >
                    <a href="#aptitudes" >
                        <span className='flex-item' data-to-scrollspy-id='aptitudes'>
                            <hr />
                            <h4 className='item-title' >APTITUDES</h4>
                        </span>
                    </a>
                </motion.li>
                
                <motion.li
                    className='list-item'
                    variants={fadeInAnimation}
                >
                    <a href="#proyects">
                        <span className='flex-item' data-to-scrollspy-id='proyects'>
                            <hr />
                            <h4 className='item-title' >PROYECTOS</h4>
                        </span>
                    </a>
                </motion.li>
                
                <motion.li
                    className='list-item'
                    variants={fadeInAnimation}
                >
                    <a href="#contact">
                        <span className='flex-item' data-to-scrollspy-id='contact'>
                            <hr />
                            <h4 className='item-title' >CONTACTO</h4>
                        </span>
                    </a>
                </motion.li>
                
                <motion.li
                className='social-list-item'
                style={{transform: "translate(-5rem, -1rem)"}}
                variants={fadeInAnimation}
                >
                    <a href="https://www.linkedin.com/in/pabloc-chiavarino/" target="_blank">
                        <img
                            className='social-icons' alt=""
                            src={LkdIcon}
                        />
                    </a>
                </motion.li>
                <motion.li
                className='social-list-item'
                style={{transform: "translateY(-1rem)"}}
                variants={fadeInAnimation}
                >
                    <a href="https://github.com/PabloC-Chiavarino" target="_blank">
                        <img
                            className='social-icons'
                            src={gitHubIcon} alt=""
                        />
                    </a>
                </motion.li>
            </motion.ul>

            {/* <motion.ul
                initial="hidden"
                animate="visible"
                transition={{ delay: 4 }}
                className='social-icons-container'
            > */}
            {/* </motion.ul> */}
        </>
    )
}

export default NavMenu