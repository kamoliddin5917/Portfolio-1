import './Reach.scss'
import telegram from '../../images/telegram.png'
import instagram from '../../images/instagram.png'
import github from '../../images/github.png'
import call from '../../images/call.png'
import email from '../../images/email.png'
import link from '../../images/http.png'

function Reach() {
    return (
        <>
        <div id="reach"></div>
        <div className="reach_container">
            <img className='link_bkg_img' src={link} alt="link" />
            <h2>My <span className='span_wrapper'>Links</span></h2>
            <span className='reach_line'></span>
            <div className="reach_wrapper">
                <a className='link_me' href="https://t.me/mahdiy_dev">
                    <img className='link_img' src={telegram} alt="telegram" />
                    Telegram
                </a>
                <a className='link_me' href="https://www.instagram.com/mahdiy_1407/">
                    <img className='link_img' src={instagram} alt="instagram" />
                    Instagram
                </a>
                <a className='link_me' href="https://github.com/mahdiydev">
                    <img className='link_img' src={github} alt="github" />
                    GitHub
                </a>
                <a className='link_me' href="tel:+998997698293">
                    <img className='link_img' src={call} alt="call" />
                    +998997698293
                </a>
                <a className='link_me' href="mailto:mahdiydev@gmail.com">
                    <img className='link_img' src={email} alt="email" />
                    mahdiydev@gmail.com
                </a>
            </div>
        </div>
        </>
    )
}

export default Reach;
