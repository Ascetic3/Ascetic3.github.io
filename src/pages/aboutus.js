import AppHero from '../components/hero';
import AppAbout from '../components/about';
import AppTeams from '../components/teams';
import AppContact from '../components/contact';


function About() {
  return (
    <div className="App">
      <AppHero />
      <AppAbout />
      <AppTeams />
      <AppContact />
    </div>
  );
}

export default About;
