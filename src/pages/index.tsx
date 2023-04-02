import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <ContactForm />
    </Layout>
  );
};

export default Home;
