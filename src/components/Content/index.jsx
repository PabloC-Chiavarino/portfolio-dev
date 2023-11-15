import { motion } from 'framer-motion'
import ScrollSpy from 'react-ui-scrollspy'
import fadeInAnimation from '../../constants/fadeInAnimation.js'
import { htmlIcon, cssIcon, jsIcon, reactIcon, gitIcon, firebIcon, whatsIcon, gmailIcon } from '../../assets/ico'
import { proy1, proy2 } from '../../assets/img'
import './styles.css'

const Content = () => {

    return (
        <motion.div className='scroll-container'
            initial='hidden'
            animate='visible'
            variants={fadeInAnimation}
            transition={{ delay: 0.25, duration: 1 }}
        >
            <ScrollSpy>
                <div className='profile-item' id='about'>
                    <h4 className='section-title'>Hola !</h4>
                    <p>
                        Durate toda mi vida tuve mucho interés con lo relacionado al mundo IT, sobretodo del lado de la programación. Disfruto de optimizar las cosas de la vida en general para hacerlas mas amenas y llevaderas.
                        Vivo con mis dos hermosos hijos y perros en la ciudad de La Plata, Provincia de Buenos Aires, Argentina.
                        Para mi, si no es lógico, no funciona, y con esa prima me desenvuelvo en la vida en general.
                        Cuando empecé en desarrollo Web me di cuenta que ésto era lo mio y a partir de ahí comencé una curva de aprendizaje radicada principalmente en las tecnologías Front-End para luego orientarme hacia ReactJs.
                        En la actualidad, estoy incursionando en el mundo del desarrollo móvil, tanto android nativo como transpilado mediante React Native.
                    </p>
                </div>
                <div className='profile-item' id='aptitudes' >
                    <h4 className='section-title'>Qué utilizo actualmente ?</h4>
                    <div className='apt-logos-container'>
                        <div>
                            <img src={htmlIcon} className='logos' alt="" />
                            <h5>HTML</h5>
                        </div>
                        <div>
                            <img src={cssIcon} className='logos' alt="" />
                            <h5>CSS</h5>
                        </div>
                        <div>
                            <img src={jsIcon} className='logos' alt="" />
                            <h5>JavaScript</h5><div></div>
                        </div>
                        <div>
                            <img src={reactIcon} className='logos' alt="" />
                            <h5>ReactJs</h5>
                        </div>
                        <div>
                            <img src={firebIcon} className='logos' alt="" />
                            <h5>Firebase</h5>
                        </div>
                        <div>
                            <img src={gitIcon} className='logos' alt="" />
                            <h5>Git</h5>
                        </div>
                    </div>
                </div>
                <div className='profile-item' id='proyects'>
                    <h4 className='section-title'>Lo que hago</h4>
                    <div className='proyects-container'>
                        <h5 className='proyect-title'>Gadget Alley</h5>
                        <p style={{textAlign: 'center'}}>Proyecto "old school code" sobre venta de artículos tecnológicos (e-commerce). Construído en Vanilla JavaScript y mockAPI, actualmente en versión beta y en proceso de testing</p>
                        <a href="https://gadget-alley.vercel.app/" target='__bank'>
                            <img className='proyect-preview' src={proy1} alt="" />
                        </a>
                        <h5 className='proyect-title'>Notebook Depot</h5>
                        <p style={{textAlign: 'center'}}>Proyecto con estándares actuales. E-commerce sobre venta de notebooks para distintos perfiles de usuario. Construído en React Js con base de datos en Google Firestore. Actualmente terminando su version 2.0 (desarrollo del sistema de usuarios con whislist y responsive design)</p>
                        <a href="https://notebook-depot.vercel.app" target='__blank'>
                            <img className='proyect-preview' src={proy2} alt="" />
                        </a>
                    </div>
                </div>
                <div className='profile-item' id='contact'>
                    <h4 className='section-title'>Ponernos en contacto</h4>
                    <div className='contact-info-container'>
                        <a style={{ color: 'whitesmoke' }} href='https://wa.me/542216545052'>
                            <img src={whatsIcon} className='contact-logos' alt="" />
                            <h5>Whatsapp : 221 654-5052</h5>
                        </a>
                    </div>
                    <div className='contact-info-container'>
                        <a style={{ color: 'whitesmoke' }} href="mailto:pchiavarino89@gmail.com">
                            <img src={gmailIcon} className='contact-logos' alt="" />
                            <h5>Gmail: pchiavarino89@gmail.com</h5>
                        </a>
                    </div>
                </div>
            </ScrollSpy>
        </motion.div>

    )
}

export default Content