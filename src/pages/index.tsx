import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import { Section } from '../components/GlobalComponents/GlobalComponents';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Projects />
      <About />
      <ContactForm />
    </Layout>
  );
};

export default Home;
