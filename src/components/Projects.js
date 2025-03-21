import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

// --- Software Projects Imports ---
import aftermathCreaturesGame from "../assets/img/Aftermath Creatures Game.png";
import minesweeper from "../assets/img/Minesweeper.png";
import documentScanner from "../assets/img/DocumentScanner.png";

// --- Design Projects Imports ---
import aftermathWireframe from "../assets/img/Aftermath Creatures Wireframe.png";
import appPrototype from "../assets/img/App Prototype.png";
import stayFitPrototype from "../assets/img/StayFit Prototype.png";
import saraaSitsPrototype from "../assets/img/SaraaSits Dashboard.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    // Software projects with GitHub links
    const softwareProjects = [
        {
            title: "Aftermath Creatures",
            description: "A survival game with diverse interactions and pet creatures.",
            imgUrl: aftermathCreaturesGame,
            projectLink: "https://github.com/harshikamboj/Aftermath-Creatures",
        },
        {
            title: "Minesweeper",
            description: "A classic puzzle game with a large 100x100 board.",
            imgUrl: minesweeper,
            projectLink: "https://github.com/harshikamboj/Minesweeper",
        },
        {
            title: "Document Scanner",
            description: "Converts images or sketches into a scanned look.",
            imgUrl: documentScanner,
            projectLink: "https://github.com/harshikamboj/Document-Scanner",
        },
    ];

    // Design projects with provided links
    const designProjects = [
        {
            title: "Aftermath Creatures Wireframe",
            description: "Low-fidelity wireframe for a game interface.",
            imgUrl: aftermathWireframe,
            projectLink: "https://drive.google.com/file/d/1o7IqeMa4TBtxklxHyYazfM6ME6Vxm1Ek/view?usp=sharing",
        },
        {
            title: "ToConnect App Prototype",
            description: "High-fidelity prototype for a mobile application.",
            imgUrl: appPrototype,
            projectLink: "https://www.figma.com/design/qhB7fM6jKPpw3llRdpbSe6/App-Prototype?node-id=0-1&t=JMeQ2aJYj3eMiKJh-1",
        },
        {
            title: "StayFit Prototype",
            description: "Fitness tracking app design concept.",
            imgUrl: stayFitPrototype,
            projectLink: "https://www.figma.com/design/aPIE0add0z8CqQMqoWCjJy/StayFit?node-id=0-1&t=6NSScfrJ3LFixpZe-1",
        },

        {
            title: "SaraaSits Dashboard",
            description: "Admin Dashboard prototype for babysitting company.",
            imgUrl: saraaSitsPrototype,
            projectLink: "https://www.figma.com/design/yiPWfuGmq7yObw7BVPvb4i/SaraaSits-Dashboard?node-id=0-1&t=l3KBs9gmbi5FUYEH-1"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>These are a mix of projects I’ve worked on for companies, personal side projects, and coursework. Some were built to solve real-world problems, while others were about experimenting and learning something new. I’ve developed mobile and web applications, designed user-friendly interfaces, and built software tools that improve efficiency and usability. Each project reflects my passion for technology, creativity, and problem-solving.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first" style={{ color: "white" }}>
                                                    Software
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" style={{ color: "white" }}>
                                                    Design
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={isVisible ? "animate__animated animate__slideInUp" : ""}
                                        >
                                            {/* SOFTWARE PROJECTS */}
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {softwareProjects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            {/* DESIGN PROJECTS */}
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {designProjects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg-shape" />
        </section>
    );
};
