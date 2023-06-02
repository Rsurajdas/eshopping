import { Container, Row, Col } from "react-bootstrap";
import "./Teams.css";
import person1 from "../../img/person_1.jpg";
import person2 from "../../img/person_2.jpg";
import person3 from "../../img/person_3.jpg";
import person4 from "../../img/person_4.jpg";
import Team from "./Team";

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "Elizabeth Graham",
      post: "CEO/Co-Founder",
      img: person1,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae aut minima nihil sit distinctio recusandae doloribus
        ut fugit officia voluptate soluta`,
    },
    {
      id: 2,
      name: "Jennifer Greive",
      post: "Co-Founder",
      img: person2,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae aut minima nihil sit distinctio recusandae doloribus
        ut fugit officia voluptate soluta`,
    },
    {
      id: 3,
      name: "Patrick Marx",
      post: "Marketing",
      img: person3,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae aut minima nihil sit distinctio recusandae doloribus
        ut fugit officia voluptate soluta`,
    },
    {
      id: 4,
      name: "Mike Coolbert",
      post: "Sales Manager",
      img: person4,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae aut minima nihil sit distinctio recusandae doloribus
        ut fugit officia voluptate soluta`,
    },
  ];
  return (
    <div className="site-section border-bottom">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={7} className="site-section-heading text-center pt-4">
            <h2>The Team</h2>
          </Col>
        </Row>
        <Row>
          {teams &&
            teams.map((team) => (
              <Col md={6} lg={3} key={team.id}>
                <Team {...team} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Teams;
