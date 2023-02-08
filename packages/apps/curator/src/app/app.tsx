import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Footer, Header } from './components';
import { getRoutes } from './routes';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';

const PREFIX = 'App';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
};
const Root = styled('div')(({ theme }) => {
  const {
    palette: { mode },
  } = theme;
  const isDark = mode==='dark' 
  return {
    [`&.${classes.root}`]: {
      backgroundColor: theme.palette.background.default,
    },
    [`& .${classes.cta}`]: {
      borderRadius: theme.shape.borderRadius,
    },
    [`& .${classes.content}`]: {
      color: theme.palette.common.white,
      fontSize: 16,
      lineHeight: 1.7,
    },
  };
});
const routes = getRoutes();

export function App() {
  return (
    <Root
      className={classNames('d-flex flex-grow-1 flex-column', classes.root)}
    >
      <Header />
      <div className="d-flex flex-grow-1">
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
      <Footer />
    </Root>
  );
}

export default App;
