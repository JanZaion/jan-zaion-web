import { useState } from 'react';

import { Button } from '../Button/styled';
import { Section, SectionTitle } from '../GlobalComponents/GlobalComponents';

import { Form, Field, Deets, ButtonContainer } from './styled';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/e14daf50-c31f-11ec-a557-034a17e2da28';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return <p>Thank you for your message, I will be in touch soon.</p>;
  }

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <Form
        action={FORM_ENDPOINT}
        method="POST"
        onSubmit={handleSubmit}
        target="about:blank"
      >
        <Deets>
          <Field name="name" placeholder="Your name" required type="text" />
          <Field name="email" placeholder="Email" required type="email" />
        </Deets>
        <textarea name="message" placeholder="Your message" required />
        <ButtonContainer>
          <Button type="submit">Send</Button>
        </ButtonContainer>
      </Form>
    </Section>
  );
};

export default ContactForm;
