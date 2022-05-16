import { Link } from '@lof-digital-www/shared';
import { Card } from 'react-bootstrap';
import { WwwEventSingleTime } from '../../interfaces/www-events.interface';
import CategoriesSelected from '../categories-selected/categories-selected';
import EventTimeComponent from '../event-time/event-time';
import HeartCount from '../heart-count/heart-count';
import styles from './single-event-time.module.scss';

/* eslint-disable-next-line */
export interface SingleEventTimeProps {
  event: WwwEventSingleTime;
}

export function SingleEventTime(props: SingleEventTimeProps) {
  console.log(props.event)
  return (
    <div className={styles['container']}>
      <Card className="mb-3">
        <Link to={`/event/${props.event.event_id}`}><Card.Header className={styles['hover']}><h3>{props.event.title}</h3></Card.Header></Link>
        <Card.Body>
          <Card.Text>
            {props.event.event_description}
          </Card.Text>
          <Card.Text>
            Location: {props.event.hosting_location}
            <HeartCount heartCount={props.event.heart_count} />
          </Card.Text>
          <Card.Text>
            <EventTimeComponent eventTime={props.event.eventTime} />
          </Card.Text>
          <Card.Text>
            <CategoriesSelected  event={props.event} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleEventTime;