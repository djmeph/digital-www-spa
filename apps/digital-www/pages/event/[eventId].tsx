'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from 'react-bootstrap';

import { EventsSingleTimeComponent } from '@lof-digital-www/www-events';

export function Event() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');

  return (
    <Container fluid className="px-0">
      <EventsSingleTimeComponent eventId={eventId} />
    </Container>
  );
}

export default Event;
