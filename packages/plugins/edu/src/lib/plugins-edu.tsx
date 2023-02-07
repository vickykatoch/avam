import { Route, Link, Routes } from 'react-router-dom';

import styles from './plugins-edu.module.scss';

/* eslint-disable-next-line */
export interface PluginsEduProps {}

export function PluginsEdu(props: PluginsEduProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Edu Plugin</h1>

      <ul>
        <li>
          <Link to="/">plugins-edu root</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<div>This is the plugins-edu root route.</div>}
        />
      </Routes>
    </div>
  );
}

export default PluginsEdu;
