import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import { Section } from '../components/GlobalComponents/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;
