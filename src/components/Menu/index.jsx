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
            transition={{ delay: 3, staggerChildren: '0.25' }}
            className='index-container'
        >

            <motion.li
                variants={defaultAnimations}
                className='list-item'
            >
                <a href="">
                    <span className='flex-item'>
                        <hr />
                        <h4 className='item-title'>ABOUT</h4>
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
                        <h4 className='item-title'>APTITUDES</h4>
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
                        <h4 className='item-title'>PROYECTOS</h4>
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
                        <h4 className='item-title'>CONTACTO</h4>
                    </span>
                </a>
            </motion.li>

        </motion.ul>
    )
}

export default Menu