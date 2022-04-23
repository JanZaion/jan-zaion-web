import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => (
  <Section id="contact">
    <SectionDivider divider />
    <SectionTitle>Contact</SectionTitle>
    <ContactForm />
  </Section>
);

export default Contact;
