import './Header.scss'
import myteam from '../img/myteam.png'
function Header() {
    return (
        <div className='header'>
            <nav className='navBar container'>
                <img src={myteam} alt='img' />
                <nav className='lists'>
                    <ul className='list'>
                        <li className='list_item'>
                            <a href='#'>
                                home
                            </a>
                        </li>
                        <li className='list_item'>
                            <a href='#'>
                                about
                            </a>
                        </li>
                    </ul>
                    <button className='listBtn'>
                        contact us
                    </button>

                </nav>
            </nav>
        </div>
    )
}
export default Header