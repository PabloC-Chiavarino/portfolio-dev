import { motion } from 'framer-motion'
import './styles.css'

const Greeting = () => {
    return (
        <>
            <div className='main__container'>
                <motion.h2 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1 }}
                    className='main'>
                    Pablo C. Chiavarino
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, transform:'translate(-100%)' }}
                    animate={{ opacity: 1, transform:'translate(0%)' }}
                    transition={{ duration: 1.2 }}
                    className='sub'>
                    Web / Mobile Developer
                </motion.h3>
            </div>
        </>
    )
}

export default Greeting