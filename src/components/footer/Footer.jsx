import React from 'react'
import '../footer/Footer.scss'
import myteam from '../img/myteam.png'
import face from '../img/facebook.png'
import pinterest from '../img/pinterest.svg'
import twit from '../img/twit.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__text container'>
                <nav className='footLogo'>
                    <nav>
                        <img src={myteam} alt='img' />
                        <ul>
                            <li>
                                <a href='#'>
                                    home
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    about
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p>
                        987  Hillcrest Lane <br /> Irvine, CA <br />California 92714 <br />Call Us : 949-833-7432
                    </p>
                </nav>


                <nav className='footRight'>
                    <nav className='nets'>
                        <img src={face} alt='img' />
                        <img src={pinterest} alt='img' />
                        <img src={twit} alt='img' />
                    </nav>
                    <h4>Copyright 2020. All Rights Reserved</h4>
                </nav>

            </div>
        </footer>
    )
}

export default Footer