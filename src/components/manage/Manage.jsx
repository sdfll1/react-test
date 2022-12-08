import React from 'react'
import './Manage.scss'
import manageBoy from '../img/manageBoy.png'
import manageParam from '../img/manageParam.png'
import manageStats from '../img/manageStats.png'
function Manage() {
    return (
        <div className='manage'>
            <div className='manage__text container'>
                <h1>
                    Build & manage <br />distributed teams <br /> like no one else.
                </h1>
                <ul className='manage__list'>
                    <li className='list__item'>
                        <img src={manageBoy} alt='img' />
                        <nav>
                            <h5>
                                Experienced Individuals
                            </h5>
                            <p>
                                Our network is made up of highly experienced professionals who are passionate about what they do.
                            </p>
                        </nav>
                    </li>
                    <li className='list__item'>
                        <img src={manageParam} alt='img' />
                        <nav>
                            <h5>
                                Easy to Implement
                            </h5>
                            <p>
                                Our processes have been refined over years of implementation meaning our teams always deliver.
                            </p>
                        </nav>
                    </li>
                    <li className='list__item'>
                        <img src={manageStats} alt='img' />
                        <nav>
                            <h5>
                            Enhanced Productivity
                            </h5>
                            <p>
                                Our customized platform with in-built analytics helps you manage your distributed teams.
                            </p>
                        </nav>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Manage