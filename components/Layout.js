import React, { useContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import MUITheme from '../src/theme';

import { AppContext } from '../context/AppContext';

import Meta from './Meta';
import GlobalStyle from './styles/_globalStyle';
import WithStyles from './styles/GlobalCSSVars';

const LayoutStyle = styled.div`
  width: 100vw;
  min-height: 100%;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--mainColor);
  .header1 {
    color: var(--mainColor);
    font-size: var(--headerFontSize);
    line-height: calc(var(--headerFontSize) * 1.5);
  }
`;

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr 9rem;
  background-color: var(--textBackgroundColor);
  color: var(--white);
  max-height: 100vh;
  height: 100vh;
  //overflow-y: scroll;
  justify-content: stretch;
  .header {
    display: grid;
    align-items: center;
    padding: 1rem;
    font-size: 24px;
    background-color: var(--mainColor);
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--mainColor); 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--detailColor); 
  }
`;

const Layout = ({ children, customTheme }) => (
  <ThemeProvider theme={MUITheme}>
    <GlobalStyle />
    <LayoutStyle customStyles={customTheme}>
      <WithStyles customStyles={customTheme} />
      <Meta />
      <Dashboard>
        <div className="header">
          Lego Sorter!
        </div>
        {children}
        <Progress />
      </Dashboard>
    </LayoutStyle>
  </ThemeProvider>
);

const ProgressStyle = styled.div`
  background-color: var(--white);
  border-top: 1px solid var(--mainColor);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  z-index: 2;
  .bar {
    display: grid;
    justify-items: center;
    align-items: center;
  }
`;

const progressStyles = [
  {
    backgroundColor: 'var(--mainColor)',
    color: 'var(--white)',
  },
  {
    backgroundColor: 'var(--detailColor)',
  },
  {
    backgroundColor: 'var(--grey)',
    color: 'var(--white)',
  },
];

const Progress = () => {
  const { useSetCounts } = useContext(AppContext);

  return (
    <ProgressStyle>
      {useSetCounts.map((set, i) => {
        const percent = Math.round(set.collected / set.count * 100);
        return (
          <motion.div
            key={set.id}
            className="bar"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            style={{ minWidth: '1%', width: `${percent}%`, backgroundColor: progressStyles[i].backgroundColor }}
          >
            {`${percent}%`}
          </motion.div>
        );
      })}
    </ProgressStyle>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  customTheme: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Layout;
