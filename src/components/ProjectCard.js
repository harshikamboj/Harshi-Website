import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
    return (
        <Col size={12} sm={6} md={4}>
            {/* Wrap the card in a link so clicking anywhere opens the project link in a new tab */}
            <a href={projectLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    );
};