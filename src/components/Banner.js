import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // Wrap the toRotate array in useMemo so it remains stable across renders
  const toRotate = useMemo(() => ["Creative", "Innovative", "Passionate"], []);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, period, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={10} md={5} xl={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1>{`Hey! I'm Harshi`}</h1>
                      <h1>
                        {`I Am `}
                        <span
                            className="txt-rotate"
                            dataPeriod="1000"
                            data-rotate='["Creative", "Innovative", "Passionate"]'
                        >
                      <span className="wrap">{text}</span>
                    </span>
                      </h1>
                      <p>
                        Hi my name is Harshi Singh Kamboj, a computer science student at Western University,
                        pursuing an Honours Bachelor of Science. I’m passionate about coding, problem-solving,
                        and creating intuitive digital experiences that blend functionality with great design.
                        With experience in front-end development, UI/UX design, and full-stack projects,
                        I’ve worked with languages like Java, Python, C++, and JavaScript, alongside frameworks
                        like React, Node.js, and Expo. I love building interactive applications, optimizing
                        software performance, and designing user-friendly interfaces that make technology
                        more accessible.
                      </p>
                    </div>
                }
              </TrackVisibility>
            </Col>
            <Col xs={13} md={7} xl={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header" />
                    </div>
                }
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
  );
};
