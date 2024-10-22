import type { FormEvent } from 'react';
import { useState } from 'react';

import { Button } from '../Button/styled';
import { Section } from '../GlobalComponents/GlobalComponents';

import { Form, Field, Deets, ButtonContainer } from './styled';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/e14daf50-c31f-11ec-a557-034a17e2da28';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <Section id="contact">
      <h2>Contact</h2>
      {submitted && <p>Thank you for your message, I will be in touch soon.</p>}
      {error && (
        <p>
          There was a problem with your submission. Please try to contact me in
          a different way.
        </p>
      )}
      {!submitted && !error && (
        <Form method="POST" onSubmit={handleSubmit} target="about:blank">
          <Deets>
            <Field name="name" placeholder="Your name" required type="text" />
            <Field name="email" placeholder="Email" required type="email" />
          </Deets>
          <textarea name="message" placeholder="Your message" required />
          <ButtonContainer>
            <Button type="submit">Send</Button>
          </ButtonContainer>
        </Form>
      )}
    </Section>
  );
};

export default ContactForm;
