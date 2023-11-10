import { motion } from 'framer-motion'
import './styles.css'

const defaultAnimations = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const Menu = () => {
    return (
        <motion.ul
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: '0.25' }}
            className='index-container'
            >

            <motion.li 
            variants={defaultAnimations}
            className='list-item'
            >
                <a href="">
                    <span className='flex-item'>
                        <hr />
                        SOBRE MÍ
                    </span>
                </a>
            </motion.li>
            <motion.li 
            className='list-item'
            variants={defaultAnimations}
            >
                <a href="">
                    <span className='flex-item'>
                        <hr />
                        APTITUDES
                    </span>
                </a>
            </motion.li>
            <motion.li 
            className='list-item'
            variants={defaultAnimations}
            >
                <a href="">
                    <span className='flex-item'>
                        <hr />
                        PROYECTOS
                    </span>
                </a>
            </motion.li>
            <motion.li 
            className='list-item'
            variants={defaultAnimations}
            >
                <a href="">
                    <span className='flex-item'>
                        <hr />
                        CONTACTO
                    </span>
                </a>
            </motion.li>

        </motion.ul>
    )
}

export default Menu