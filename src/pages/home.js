import AppHero from '../components/hero';
import AppBlog from '../components/blog';

function Home() {
  return (
    <div className="App">
        <AppHero />
        <AppBlog />
    </div>
  );
}

export default Home;