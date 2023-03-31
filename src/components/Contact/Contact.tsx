import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => (
  <Section id="contact">
    <SectionDivider divider />
    <SectionTitle>Contact</SectionTitle>
    <ContactForm />
  </Section>
);

export default Contact;
