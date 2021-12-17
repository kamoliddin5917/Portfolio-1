import './Main.scss'
import person from '../../images/person.png'
import Repositories from '../Repositories/Repositories'
import About from "../About/About";
import Reach from '../Reach/Reach';

function Main() {
    window.addEventListener('scroll', () => {
        const title = document.getElementById('title')
        const personImg = document.getElementById('img')
        const value = window.scrollY

        title.style.left = -value + 'px'
        personImg.style.right = -value + 'px'
    })

    return (
        <main>
            <div className="main_container">
                <div className="main_container_wrapper">
                    <h1 id='title'>I'm <span>web</span> <span>D</span>evelope<span>r</span></h1>
                    <button>
                        <a href="#about">
                            Let's Start
                        </a>
                    </button>
                    <img id='img' src={person} alt="person" />
                </div>
                <span className='main_span'></span>
            </div>
            <About />
            <Repositories />
            <Reach />
        </main>
    )
}

export default Main;
