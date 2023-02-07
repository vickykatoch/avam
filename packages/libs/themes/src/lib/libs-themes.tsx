import styles from './libs-themes.module.scss';

/* eslint-disable-next-line */
export interface LibsThemesProps {}

export function LibsThemes(props: LibsThemesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibsThemes!</h1>
    </div>
  );
}

export default LibsThemes;
