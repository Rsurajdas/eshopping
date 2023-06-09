import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getTeams } from "../../service/teams";
import "./Teams.css";
import Team from "./Team";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const team = await getTeams();
      setTeams(team);
    };
    fetchData();
  }, []);

  return (
    <div className="site-section border-bottom">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={7} className="site-section-heading text-center pt-4">
            <h2>The Team</h2>
          </Col>
        </Row>
        {console.log(teams)}
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
