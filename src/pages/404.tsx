import Link from 'next/link';

import { Four } from '../components/FourOhFour/styled';

export const NotFound = () => (
  <Four>
    <div>404 | Looks like the page you are looking for is not here :(</div>
    <Link href="/">{`Back home >>`}</Link>
  </Four>
);

export default NotFound;
