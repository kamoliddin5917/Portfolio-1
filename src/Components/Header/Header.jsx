import './Header.scss'
import logo from '../../images/md.png'
import menu from '../../images/menu.png'

function Header() {
    const burgerOpen = () => {
        const burger = document.getElementById('burger')

        burger.classList.add('nav_list--active')
    }
    return (
        <header>
            <a href="#" className='logo_link'>
                <img className='logo_img' src={logo} alt="logo" />
            </a>
            <nav>
                <div className="nav_content_wrapper" id='burger' onClick={e => e.target.id === 'burger' ? 
                e.target.classList.remove('nav_list--active') : ''}>
                    <ul className='nav_list'>
                        <li className='nav_list_item'>
                            <a href="#about" className='nav_link'> 
                                About <span>me</span>
                            </a>
                        </li>
                        <li className='nav_list_item'>
                            <a href="#repo" className='nav_link'> 
                                My <span>R</span>epositories
                            </a>
                        </li>
                        <li className='nav_list_item'>
                            <a href="#reach" className='nav_link'> 
                                My <span>Links</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <button onClick={burgerOpen}>
                <img src={menu} alt="burger" />
            </button>
        </header>
    )
}

export default Header;
