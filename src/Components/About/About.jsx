import './About.scss'
import info from '../../images/info.png'

function About() {
    window.addEventListener('scroll', () => {
        const card = document.getElementById('card')
        const value = window.scrollY

        card.style.left = value * 0.5 - 300 + 'px'
    })
    
    return (
        <>
            <div id="about"></div>
            <div className="about">
                <img src={info} alt="info" className='info_img' id="card" />
                <div className="about_wrapper">
                    <h2><span>About</span> me</h2>
                    <span className='about_line'></span>
                    <section className='about_section'>
                        Hi! <br />
                        My Name Is Mahdiy.<br />
                        I'm {new Date().getFullYear() - 2002} Years Old.<br />
                        I'm Full Stack Web Developer.<br />
                        I graduated from the "Najot Ta'lim" Training Center.<br />
                        What I Learned: <br />
                        <code>
                            {`{`}
                                <section>
                                    frotend: {`{`}
                                        <section>
                                            1: [ "HTML", "CSS" ], <br />
                                            2: [ "SCSS", "SASS", "GULP" ], <br />  
                                            3: [ "GIT", "GITHUB" ], [ "JAVASCRIPT", "REACT.JS" ]
                                        </section>
                                    {`}`} <br /> 
                                    backend: {`{`} <br />
                                        <section>
                                            1: [ "NODE.JS", "EXPRESS.JS"], <br />
                                            2: [ "GRAPHQL", "POSTGRESQL" ], <br />
                                            3: [ "MONGODB", "MONGOOSE" ], <br />
                                            4: [ "ORM": [ "SEQUELIZE" ] ]
                                        </section>
                                    {`}`}
                                </section>
                            {`}`} <br />
                        </code>
                        <p>Learned Leangh: <span>16</span></p>
                    </section>
                    <button>
                        <a href="#repo">
                            My Repositories
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default About;
