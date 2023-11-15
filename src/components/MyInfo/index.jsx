import { motion } from 'framer-motion'
import './styles.css'

const MyInfo = () => {
    return (
        <>
            <div className='info-container'>
                <motion.h2 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{delay: 0.25, duration: 1.5 }}
                    className='title'>
                    Pablo C. Chiavarino
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, transform:'translate(-100%)' }}
                    animate={{ opacity: 1, transform:'translate(-80%)' }}
                    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                    className='subtitle'>
                    Front End Developer
                </motion.h3>
            </div>
        </>
    )
}

export default MyInfo