import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import CardLegoPiece from './CardLegoPiece';
import WaitModal from './lib/utils/WaitModal';

import { AppContext } from '../context/AppContext';

const WorkSpaceStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-gap: 2rem;
  padding: 2rem;
  font-size: 20px;
  overflow-y: scroll;
`;

const Workspace = () => {
  const { setSetCounts } = useContext(AppContext);

  const [isLoading, toggleLoading] = useState(true);
  const [useSets, setSets] = useState([]);
  const [usePieces, setPieces] = useState({});
  // Todo - Get this from db
  const [useSetsList, setSetsList] = useState(['75871-1', '31024-1', '31008-1']);

  useEffect(() => {
    async function fetchData() {
      const sets = [];
      const setCounts = [];
      const parts = {};
      for (let i = 0; i < useSetsList.length; i++) {
        let set;
        set = await axios.get('/api/getSet', {
          params: {
            setId: useSetsList[i],
          },
        });
        if (!set.data.id) {
          // Add set
          set = await axios.get('/api/addSet', {
            params: {
              setId: useSetsList[i],
            },
          });
        }
        sets.push({ ...set.data });
        setCounts.push({ id: useSetsList[i], count: set.data.count, collected: set.data.collected });
        for (let b = 0; b < set.data.parts.length; b++) {
          const { partId, img, quantity, collected } = set.data.parts[b];
          parts[partId] = {
            ...parts[partId],
            id: partId,
            img,
            totalCount: (parts[partId]) ? parts[partId].totalCount + quantity : quantity,
            sets: {
              [useSetsList[i]]: {
                quantity,
                collected,
              },
            },
          };
        }
      }
      setPieces(parts);
      setSets(sets);
      setSetCounts(setCounts);
      toggleLoading(false);
    }
    fetchData();
    // Todo - set useSetsList as deps when connected to db
  }, []);

  return (
    <WorkSpaceStyle>
      {Object.keys(usePieces).sort().map(pieceId => (
        <CardLegoPiece
          key={pieceId}
          piece={usePieces[pieceId]}
          sets={useSetsList}
        />
      ))}
      <WaitModal isOpen={isLoading} />
    </WorkSpaceStyle>
  );
};

export default Workspace;
