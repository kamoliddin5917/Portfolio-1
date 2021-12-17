import './Repositories.scss'
import useUser from '../../hooks/useUser'
import folder from '../../images/folder.png'

function Repositories() {
    const { repo } = useUser('repo')

    window.addEventListener('scroll', () => {
        const folder = document.getElementById('folder')
        const value = window.scrollY

        folder.style.right = value * 0.5 - 500 + 'px'
        folder.style.transform = `rotateZ(${value * 0.2 - 500}deg)`
    })

    return (
        <>
            <div id="repo"></div>
            <div className="repositories_container">
                <img className='folder' src={folder} id='folder' alt="folder" />
                <h2>My <span>R</span>epositories</h2>
                <span className='span'></span>
                <button>
                    <a href="#reach">
                        How To Reach Me
                    </a>
                </button>
                {repo.length ?
                    <ul className='repo_list'>
                        {repo.map(r => {
                            return (
                                <li className='repo_list_item' key={r.id} >
                                    <img src={r.owner.avatar_url} alt="avatar" />
                                    <h3>{r.name}</h3>
                                    <a href={r.html_url}>{r.html_url}</a>
                                    <span>{r.pushed_at}</span>
                                </li>
                            )
                        })}
                    </ul>
                    : []}
            </div>
        </>
    )
}

export default Repositories;
