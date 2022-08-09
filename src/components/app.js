import React from "react";
import SlidePhotos from "./SlidePhotos";


export default function Main(){
   
    return(
    <div className="main-page">
        <aside>
            <section>
                <SlidePhotos/>
            </section>
            <section>
                <h3>Contact</h3>
                <div className="contact-address">34/218, Suwinthawong Road, Krathum Rai, Nong Chok, Bangkok, 10530</div>
                <div>Email : sasawat.wanatsawan@gmail.com</div>
                <div>Line : EARTH.K-ON</div>
                <div>Facebook : Sasawat Thurarat</div>
            </section>

            <section className="education">
                <h3>Education</h3>
                <div>Applied Mathematics</div>
                <div>Faculty of Science</div>
                <div className="education-university">
                    <span>King Mongkut’s Institute of Technology Ladkrabang</span>
                    <span>2018-2022</span>
                </div>
            </section>

            <section>
                <h3>Values</h3>
                <ul>
                    <li>Self-thought developer and ready to learn new things</li>
                    <li>Work as a team</li>
                    <li>Willing to take responsibity and work autonomously</li>
                </ul>
            </section>

            <section>
                <h3>Hobbies</h3>
                <ul>
                    <li>Valorant</li>
                    <li>League of Legends</li>
                    <li>Dota2</li>
                    <li>Draw</li>
                </ul>
            </section>
        </aside>
       
        <main>
            <div className="content content-top">
                <h1>Sasawat Thurarat</h1>
                <h2>Front End Software Developer</h2>
                <p>I have knowledge and experience in developing JavaScript web applications. I am interested in web applications and front-end developers. I am eager to develop while challenging myself by applying knowledge and problem solving to my work. I am open to new knowledge or new solutions. and ready to learn to work as a team.</p>
            </div>

            <div className="content">
                <h3>Work experiences</h3>
                <hr/>
                <div className="company">
                    <span>Hello Spec co.,ltd.</span>
                    <span>July 2021 - Present</span>
                </div>
                <div className="work-title">Software Developer Internship</div>
                    <div>
                        <ul>
                            <li>Participate in the software engineering mini-bootcamp at Hello Spec</li>
                            <li>Develop mini-projects base on JavaScript, HTML/CSS, Go lang and Ruby on Rails</li>
                        </ul>
                    </div>
            </div>

            <div className="content content-main">
                <h3>Projects</h3>
                <hr/>
                <div className="project">
                    <h4>Ruby on Rails web application</h4>
                    <ul>
                        <li>ToDo application that run as a single page app</li>
                        <li>Test website Sangdad with framework Playwright</li>
                    </ul>
                </div>

            </div>

            <div className="content content-skills">
                <h3>Skills</h3>
                <hr/>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML5/CSS3</li>
                </ul>
            </div>
        </main>
    </div>
    )
}