// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {  getRoutes } from './routes';

const routes = getRoutes();

export function App() {
  return (
    <div className="d-flex flex-grow-1 flex-column">
      <h1>Hi There</h1>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/edu">Click here for page 2.</Link>
            </div>
          }
        />
        {routes.map((route) => (
          <Route
          key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<p> Loading...</p>}>
                <route.Component />
              </Suspense>
            }
          />
        ))}
        
      </Routes>
    </div>
  );
}

export default App;
