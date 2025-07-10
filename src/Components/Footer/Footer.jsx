import './Footer.css'
import MSlogo from '../../assets/images/MSlogo.svg'
import globe from '../../assets/images/globe.svg'
 
const Footer = () => {
    return(
        <section className='FooterSection'>
            <div className='FooterPagesSection'>
                <div>
                    <p><a href="#"><b>Services Hub</b></a></p>
                    <p><a href="#">Home</a></p>
                    <p><a href="#">Getting Started</a></p>
                    <p><a href="#">Release Notes</a></p>
                    <p><a href="#">Give Feedback</a></p>
                    <p><a href="#">Documentation</a></p>
                </div>
                <div>
                    <p><a href="#"><b>Contract</b></a></p>
                    <p><a href="#">Contract Details</a></p>
                    <p><a href="#">Manage Access</a></p>
                    <p><a href="#">Shared Files</a></p>
                    <p><a href="#"></a></p>
                </div>
                <div>
                    <p><a href="#"><b>Support</b></a></p>
                    <p><a href="#">Contact Support</a> </p>
                    <p><a href="#">Customer Pulse</a></p>
                    <p><a href="#"></a></p>
                    <p><a href="#"></a></p>
                </div>
                <div>
                    <p><a href="#"><b>Services</b></a></p>
                    <p><a href="#">Catalog</a> </p>
                    <p><a href="#">Plans</a></p>
                    <p><a href="#"></a></p>
                    <p><a href="#"></a></p>
                </div>
                <div>
                    <p><a href="#"><b>Health</b></a></p>
                    <p><a href="#">Critical Alerts</a></p>
                    <p><a href="#">Product Updates</a></p>
                    <p><a href="#">Office 365 Roadmap</a></p>
                    <p><a href="#">Assessments</a></p>
                </div>
                <div>
                    <p><a href="#"><b>Learning</b></a></p>
                    <p><a href="#">Learn-on-demand</a></p>
                    <p><a href="#">Workshops</a></p>
                </div>
            </div>
            <div></div>
            <div className='FooterLinkSection' style={{marginTop: '2rem'}}>
                <p className='title'><img src={globe}  alt='globe'/>Current Culture: United States - English</p>
                <div className='FooterLinks'>
                    <p>Contact Us</p>
                    <p>Privacy and Cookies</p>
                    <p>Trademarks</p>
                    <p>About our ads</p>
                    <p><img src={MSlogo} alt='logo'/>Microsoft {new Date().getFullYear()}</p>
                </div>
            </div>
        </section>
    )
}
export default Footer;