import styles from './home-page.module.scss';
import { Prompt } from '@lof-digital-www/shared';
import { TagFilterGroupComponent } from '@lof-digital-www/shared';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div>
      <Prompt title="Welcome to Lakes of Fire 2022!">
        <TagFilterGroupComponent />
      </Prompt>
    </div>
  );
}

export default HomePage;
