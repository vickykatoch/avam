import { lazy, LazyExoticComponent } from 'react';

export function getRoutes(): Array<{
  path: string;
  Component: LazyExoticComponent<any>;
}> {
  return [
    {
      path: '/edu',
      Component: lazy(() =>
        import(`@avam/edu`).then((module) => ({ default: module.PluginsEdu }))
      ),
    },
  ];
}

export function getRoute() {
  const path = 'edu';
  return lazy(() =>
    import(`@avam/edu`).then((module) => ({ default: module.PluginsEdu }))
  );
}
