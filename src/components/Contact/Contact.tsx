import ContactForm from '../ContactForm/ContactForm';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../GlobalComponents/GlobalComponents';

const Contact = () => (
  <Section id="contact">
    <SectionDivider divider />
    <SectionTitle>Contact</SectionTitle>
    <ContactForm />
  </Section>
);

export default Contact;
