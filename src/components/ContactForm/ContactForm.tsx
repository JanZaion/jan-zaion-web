import { useState } from 'react';

import { Form, Field, Deets } from './styled';

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
    return <div>Thank you for your message, I&aposll be in touch soon.</div>;
  }

  return (
    <Form
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      target="_blank"
    >
      <Deets>
        <Field name="name" placeholder="Your name" required type="text" />
        <Field name="email" placeholder="Email" required type="email" />
      </Deets>
      <textarea name="message" placeholder="Your message" required />
      <button type="submit">Send</button>
    </Form>
  );
};

export default ContactForm;
