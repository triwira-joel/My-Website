import './about.scss';

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="wrapper">
                <div className="left">
                    <img src={require('../../assets/foto_joel.jpeg')} alt="me" width={"200"} height={"auto"} />
                    <h1>About Me</h1>

                </div>
                <div className="border" />
                <div className="right">

                    <p className='header'>Joel Triwira Santosa is a highly enthusiastic individual that has the passion in the world of programming.<br /><br /></p>
                    <p> With 3 years of training as an informatics engineer, Joel has learned the basics of programming and has been able to develop a strong foundation in the field of programming.
                        Equipped with the experience of handling projects, he is familiar with handling projects.
                        <br /><br />
                        Joel is a self-motivated individual that is able to work independently and in a team.
                        He is also able to work in a fast-paced environment and is able to adapt to new environments.
                        <br /><br />
                        He has worked on couple of projects that are in the field of web development both front-end and back-end mostly with react.
                        He is also able to work on mobile applications with flutter.
                        Flutter is a cross-platform framework that is used to develop mobile applications.
                        <br /><br />
                        Most of his time is spent in the field of programming, but he also likes to play games and watch movies.
                        He is also a huge fan of the anime and manga.
                        <br /><br />
                    </p>
                </div>

            </div>
        </div>
    )
}
