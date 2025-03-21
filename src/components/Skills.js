import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technical Skills</h2>
                        <p>I have built a strong technical foundation that allows me to craft both robust and <br></br>
                            user centric solutions. By blending clean code practices, thoughtful architecture,  <br></br>
                            and intuitive design, I strive to deliver impactful digital experiences that meet <br></br>
                            modern standards. Below is a selection of the core skills and tools I rely on to <br></br>
                            bring projects to life. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h3>Java</h3>
                            </div>
                            <div className="item">
                                <h3>Python</h3>
                            </div>
                            <div className="item">
                                <h3>C/C++</h3>
                            </div>
                            <div className="item">
                                <h3>SQL</h3>
                            </div>
                            <div className="item">
                                <h3>JavaScript</h3>
                            </div>
                            <div className="item">
                                <h3>HTML</h3>
                            </div>
                            <div className="item">
                                <h3>CSS</h3>
                            </div>
                            <div className="item">
                                <h3>Assembly</h3>
                            </div>
                            <div className="item">
                                <h3>React</h3>
                            </div>
                            <div className="item">
                                <h3>Node.js</h3>
                            </div>
                            <div className="item">
                                <h3>WordPress</h3>
                            </div>
                            <div className="item">
                                <h3>Ruby on Rails</h3>
                            </div>
                            <div className="item">
                                <h3>Expo</h3>
                            </div>
                            <div className="item">
                                <h3>Typescript</h3>
                            </div>
                            <div className="item">
                                <h3>Git</h3>
                            </div>
                            <div className="item">
                                <h3>VS Code</h3>
                            </div>
                            <div className="item">
                                <h3>Unity</h3>
                            </div>
                            <div className="item">
                                <h3>TinkerCad</h3>
                            </div>
                            <div className="item">
                                <h3>Figma</h3>
                            </div>
                            <div className="item">
                                <h3>Balsamiq</h3>
                            </div>
                            <div className="item">
                                <h3>Adobe CC</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
