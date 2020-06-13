import React from "react"
import styles from "./AboutPage.module.scss"



export default function AboutPage() {
    return (
        <div className={styles.AboutPage}>
            <p>(work in progress)</p>
            <p>hello :)</p>
            <br />

            <h2>Source code</h2>
            <p>Check out the source code for the project here!</p>
            <a href="https://github.com/IdaFagerlund/music-store">https://github.com/IdaFagerlund/music-store</a>
            <br /><br /><br />

            <h2>About</h2>
            <p>
                The purpose of this website is to put together a fullstack application that I can use as a portfolio project to showcase some of my programming knowledge.
                I'm also using this project to learn and explore some parts in application development I want to understand better.
                The site is a work in progress but I'll keep working on it when I have the time until it's complete.
            </p>
            <br /><br />

            <h3>Programming languages and tools</h3>
            <div><p><b>Backend:&nbsp;</b></p><p>Java, SpringBoot, Hibernate, MySQL, JWT</p></div>
            <div><p><b>Frontend:&nbsp;</b></p><p>React, Redux, scss modules</p></div>
            <div><p><b>Other:&nbsp;</b></p><p>Docker and docker compose, Nginx, AWS EC2 hosting</p></div>

            <br /><br />
            <h2>Contact</h2>
            <p>ida.fagerlund@hotmail.com</p>
            <p>https://www.linkedin.com/in/ida-fagerlund-a2b5b9182/</p>
            <br /><br /><br /><br />
        </div>
    )
}