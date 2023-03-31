import Link from 'next/link';
import React from 'react';

import { ButtonBack, ButtonFront } from '../GlobalComponents/GlobalComponents';

const BigButton = () => (
  <Link href="/#contact">
    <ButtonBack>
      Get in touch
      <ButtonFront>Get in touch</ButtonFront>
    </ButtonBack>
  </Link>
);

export default BigButton;
