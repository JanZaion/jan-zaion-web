import { useState } from 'react';
import { Form, Diver } from './ContactFormStyles';

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
      <Diver>
        <input type="text" placeholder="Your name" name="name" required />
      </Diver>
      <Diver>
        <input type="email" placeholder="Email" name="email" required />
      </Diver>
      <Diver>
        <textarea placeholder="Your message" name="message" required />
      </Diver>
      <Diver>
        <button type="submit">Send</button>
      </Diver>
    </Form>
  );
};

export default ContactForm;
