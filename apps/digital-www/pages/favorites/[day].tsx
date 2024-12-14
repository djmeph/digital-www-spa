'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from 'react-bootstrap';

import { DayOfWeek, FavoritesComponent } from '@lof-digital-www/www-events';

export function Favorites() {
  const searchParams = useSearchParams();
  const day = searchParams.get('day');
  if (typeof day !== 'string') throw Error('Invalid Parameter');

  return (
    <Container fluid className="px-0">
      <FavoritesComponent day={day as DayOfWeek} />
    </Container>
  );
}

export default Favorites;
