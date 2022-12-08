import React from 'react'
import '../team/Team.scss'
import aiysha from '../img/Aiysha.png'
import arthur from '../img/Arthur.png'
import kady from '../img/Kady.png'
function Team() {
    return (
        <div className='team' >
            <div className='team__text container'>
                <h1>
                    Delivering real results for top <br /> companies. Some of our <span>success stories</span>.
                </h1>

                <ul className='team__list'>
                    <li className='team__item'>
                        <p>
                            “The team perfectly fit the specialized skill set   <br />
                            required.   They focused on the most essential <br /> features helping us launch the platform eight <br /> months faster than planned.”
                        </p>
                        <h3>
                            Kady Baker
                        </h3>
                        <h4>
                            Product Manager at Bookmark
                        </h4>
                        <img src={kady} alt='img' />
                    </li>
                    <li className='team__item'>
                        <p>
                            “We needed to automate our entire onboarding <br /> process. The team came in and built out the <br /> whole journey. Since going live, user retention <br /> has gone through the roof!”
                        </p>
                        <h3>
                            Aiysha Reese
                        </h3>
                        <h4>
                            Founder of Manage
                        </h4>
                        <img src={aiysha} alt='img' />
                    </li>
                    <li className='team__item'>
                        <p>
                            “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
                        </p>
                        <h3>
                            Arthur Clarke
                        </h3>
                        <h4>
                            Co-founder of MyPhysio
                        </h4>
                        <img src={arthur} alt='img' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Team