import { useState } from 'react';
import { Form, Name, Email, Deets } from './ContactFormStyles';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/e14daf50-c31f-11ec-a557-034a17e2da28';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return <div>Thank you for your message, I'll be in touch soon.</div>;
  }

  return (
    <Form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
      <Deets>
        <Name type="text" placeholder="Your name" name="name" required />
        <Email type="email" placeholder="Email" name="email" required />
      </Deets>
      <textarea placeholder="Your message" name="message" required />
      <button type="submit">Send</button>
    </Form>
  );
};

export default ContactForm;
