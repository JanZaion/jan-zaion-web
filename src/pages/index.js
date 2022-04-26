import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Contact from '../components/Contact/Contact';

const Home = () => {
  // const Home = ({ head }) => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;

// export async function getStaticProps() {
//   const head = {
//     metaTitle: 'Jan Zaion',
//     metaDescription:
//       'I am Jan Zaion, a JavaScript developer with passion for technology and music. Contact me if you are interested in cooperation.',
//     metaKeywords: 'JavaScript, React, Next, Node, Max, Max for Live',
//   };

//   return {
//     props: {
//       head,
//     },
//   };
// }
