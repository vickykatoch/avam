# Avam

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


1. Generate vanilla typescript lib
npx nx generate @nrwl/js:library utils --unitTestRunner=jest --directory=packages/libs --bundler=rollup --compiler=swc --config=workspace --importPath=@avam/utils --publishable --testEnvironment=node --no-interactive --dry-run

npx nx generate @nrwl/react:application curator --style=scss --directory=packages/app --routing --no-interactive --dry-run

npx nx generate @nrwl/react:library themes --directory=packages/libs --buildable --bundler=rollup --importPath=@avam/themes --publishable --no-interactive --dry-run 