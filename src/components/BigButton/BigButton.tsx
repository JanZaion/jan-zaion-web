import Link from 'next/link';

import { ButtonBack, ButtonFront } from './styled';

const BigButton = () => (
  <Link href="/#contact">
    <ButtonBack>
      Get in touch
      <ButtonFront>Get in touch</ButtonFront>
    </ButtonBack>
  </Link>
);

export default BigButton;
