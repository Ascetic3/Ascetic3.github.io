import AppHero from '../components/hero';
import AppAbout from '../components/about';
import AppTeams from '../components/teams';
import AppContact from '../components/contact';
import Container from 'react-bootstrap/Container';
import AppTeamCarusel from '../components/team-carusel';

function About() {
  return (
    <div className="App">
      <AppHero />
      <Container fluid>
        <AppAbout />
        <AppTeams />
        < AppTeamCarusel />
        <AppContact />
      </Container>
    </div>
  );
}

export default About;
