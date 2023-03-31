import React from 'react';
import Link from 'next/link';

import { ButtonBack, ButtonFront } from './index';

const Button = (props) => (
  <Link href={props.destination}>
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
      {props.children}
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>
        {props.children}
      </ButtonFront>
    </ButtonBack>
  </Link>
);

export default Button;
