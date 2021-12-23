import Navigation from '../components/Navigation';
import CopyToClipboard from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />

            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>

                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Bras-Panon</span>
                        </li>

                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text="0624586599">
                                <span className='clickInput' onClick={() => { alert("Téléphone copié !"); }}>
                                    06 55 44 77 55
                                </span>

                            </CopyToClipboard>
                        </li>

                        <li>
                            <i className='fas fa-envelope'></i>
                            <CopyToClipboard text="monmail@mail.fr">
                                <span className='clickInput' onClick={() => { alert("E-mail copié !"); }}>
                                    monmail@mail.fr
                                </span>

                            </CopyToClipboard>
                        </li>


                    </ul>
                </div>

            </div>

            Bienvenue sur mes Contact!!!
        </div >
    );
};

export default Contact;