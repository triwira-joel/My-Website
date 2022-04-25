import './contact.scss';
import { Call, Mail, ArrowUpward } from "@mui/icons-material";

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='wrapper'>
                <div className='contact-text'>
                    Contact
                </div>
                <div className='contact-content'>
                    <div className='contact-call-icons'>
                        <Call />
                        <h3>+62 813 1923 1344</h3>
                    </div>
                    <div className='contact-mail-icons'>
                        <Mail />
                        <h3>triwira.joel@gmail.com</h3>
                    </div>
                    <div className='related-links'>
                        <img src={require('../../assets/LI-In-Bug.png')} alt='linkedin' width={'30px'} height={'auto'} />
                        <a href="https://www.linkedin.com/in/joel-triwira-4052881ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
                <div className='contact-footer'>
                    <div className='scroll-up' >
                        <a href="#home">
                            <ArrowUpward color='primary' />
                            <p>Scroll to Top</p>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    )
}
