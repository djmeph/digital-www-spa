import { useFavoritesContext } from '@lof-digital-www/shared';
import { useEventsFeedContext } from '@lof-digital-www/www-events';

import { getFavorites } from '../../methods/events-feed';

import styles from './day-view.module.scss';

export interface DayViewProps {
  currentDate: string;
}

export function DayViewComponent({ currentDate }: DayViewProps) {
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);

  return <div className={styles['container']} />;
}

export default DayViewComponent;
