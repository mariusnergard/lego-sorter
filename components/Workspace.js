import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import CardLegoPiece from './CardLegoPiece';


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
  const [isLoading, toggleLoading] = useState(true);
  const [useSets, setSets] = useState([]);
  const [usePieces, setPieces] = useState({});
  // Todo - Get this from db
  const [useSetsList, setSetsList] = useState(['75871-1', '31024-1', '31008-1']);

  useEffect(() => {
    async function fetchData() {
      const sets = [];
      const parts = {};
      for (let i = 0; i < useSetsList.length; i++) {
        const set = await axios.get(`https://rebrickable.com/api/v3/lego/sets/${useSetsList[i]}/parts/`, {
          headers: {
            Authorization: 'key 0a38aa870374a51a48ec5a83ed950176',
          },
        });
        sets.push({ id: useSetsList[i], parts: set.data.results });
        for (let b = 0; b < set.data.results.length; b++) {
          // if (set.data.results[b].part.part_num === '2432') {
          //   console.log(set.data.results[b]);
          // }
          const partNumber = `${set.data.results[b].part.part_num}_${set.data.results[b].color.name}`;
          parts[partNumber] = {
            ...parts[partNumber],
            id: partNumber,
            img: set.data.results[b].part.part_img_url,
            totaltCount: (parts[partNumber]) ? parts[partNumber].totaltCount + set.data.results[b].quantity : set.data.results[b].quantity,
            sets: {
              [useSetsList[i]]: {
                quantity: set.data.results[b].quantity,
                collected: 0,
              },
            },
          };
        }
      }
      console.log(parts);
      console.log(sets);
      setPieces(parts);
      setSets(sets);
    }
    fetchData();
    // Todo - set useSetsList as deps when connected to db
  }, []);

  const setPartComplete = (part) => {
    const partToComplete = usePieces[part];
    const partComplete = {
      ...partToComplete,
      complete: true,
    };
    setPieces(prev => ({
      ...prev,
      [usePieces[part].id]: partComplete,
    }));
  };

  return (
    <WorkSpaceStyle>
      {Object.keys(usePieces).sort().map(pieceId => (
        <AnimatePresence>
          {!usePieces[pieceId].complete && (
            <motion.div
              key={`motion_${pieceId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CardLegoPiece
                key={pieceId}
                piece={usePieces[pieceId]}
                sets={useSetsList}
                setPartComplete={setPartComplete}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </WorkSpaceStyle>
  );
};

export default Workspace;
