import './Footer.scss'
import logo from '../../images/md.png'

function Footer() {
    return (
        <footer>
            <div className="footer_wrapper">
                <a href="#" className='logo_link footer_logo_link'>
                    <img className='logo_img' src={logo} alt="logo" />
                    <h3>MahdiyDev</h3>
                </a>
                <nav>
                    <ul className='footer_nav_list'>
                        <li className='footer_nav_list_item'>
                            <a href="#" className='footer_nav_link'> 
                                Let's Start
                            </a>
                        </li>
                        <li className='footer_nav_list_item'>
                            <a href="#about" className='footer_nav_link'> 
                                About me
                            </a>
                        </li>
                        <li className='footer_nav_list_item'>
                            <a href="#repo" className='footer_nav_link'> 
                                My Repositories
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <p>
                © 2020-{new Date().getFullYear()} MahdiyDev
            </p>
        </footer>
    )
}

export default Footer;
