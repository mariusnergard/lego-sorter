import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { AppContextProvider } from '../context/AppContext';

const MyApp = ({
  Component,
  pageProps,
  env,
}) => {
  const [useMenuOpen, setMenuOpen] = useState(true);
  const [useCustomTheme, setCustomTheme] = useState({});

  useEffect(() => {
    const navOpen = (Object.prototype.hasOwnProperty.call(localStorage, 'meshNavOpen')) ? (localStorage.getItem('meshNavOpen') === 'true') : true;
    setMenuOpen(navOpen);
  }, []);

  return (
    <AppContextProvider env={env} user={pageProps.user || false}>
      <Layout
        navigation={{ useMenuOpen, setMenuOpen }}
        customTheme={useCustomTheme}
      >
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
};

const env = {
  apiURL: process.env.apiURL,
  version: process.env.npm_package_version,
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  console.log(pageProps);
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx) || {};
  }
  if (ctx.req && ctx.req.session.passport) {
    console.log(pageProps);
    pageProps.user = ctx.req.session.passport.user;
  }
  return { pageProps, version: process.env.npm_package_version, env: process.env };
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
  env: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MyApp;
export const withEnv = WrappedComponent => props => <WrappedComponent {...props} env={env} />;
