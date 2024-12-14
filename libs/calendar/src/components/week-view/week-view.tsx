import { useFavoritesContext } from '@lof-digital-www/shared';
import { datesOfWeek, useEventsFeedContext } from '@lof-digital-www/www-events';

import { getFavorites } from '../../methods/events-feed';

import styles from './week-view.module.scss';

export function WeekViewComponent() {
  const currentDate = `${datesOfWeek.Wednesday}T00:00:00`;
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);
  return <div className={styles['container']} />;
}

export default WeekViewComponent;
