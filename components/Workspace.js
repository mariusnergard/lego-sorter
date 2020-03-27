import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import CardLegoPiece from './CardLegoPiece';
import WaitModal from './lib/utils/WaitModal';

import { AppContext } from '../context/AppContext';


const WorkSpaceStyle = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-rows: 1fr;
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    //grid-auto-rows: max-content;
    grid-gap: 2rem;
    font-size: 20px;
    padding: 2rem;
    //overflow-y: scroll;
  }
  .prev {
    background-color: #999999;
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 26px;
    &:hover {
      background-color: skyblue;
      font-size: 30px;
    }
  }
  .next {
    background-color: #999999;
    display: grid;
    align-items: center;
    justify-items: center;
  }
`;

const Workspace = () => {
  const { setSetCounts, addToCount } = useContext(AppContext);
  const perPage = 9;
  const [isLoading, toggleLoading] = useState(true);
  const [useSets, setSets] = useState([]);
  const [useUnsortedParts, setUnsortedParts] = useState({});
  const [usePieces, setPieces] = useState({});
  const [useSetsList, setSetsList] = useState(['31052-1', '60079-1', '31037-1']);
  const [usePage, setPage] = useState(0);

  const nextPage = (() => {
    if (usePage > useUnsortedParts.length / perPage) return;
    setPage(prev => prev + 1);
  });

  const prevPage = (() => {
    if (usePage === 0) return;
    setPage(prev => prev - 1);
  });

  const collectPart = (async (partId, setId) => {
    const { data } = await axios.get('/api/collectPart', {
      params: {
        setId,
        partId,
      },
    });
    setPieces(prev => ({
      ...prev,
      [partId]: {
        ...prev[partId],
        totalCollected: prev[partId].totalCollected + 1,
        sets: {
          ...prev[partId].sets,
          [setId]: {
            ...prev[partId].sets[setId],
            collected: data.updatedCountTo,
          },
        },
      },
    }));
  });

  const updatePartsList = () => {
    console.log('setting list');
    const pieceIds = Object.keys(usePieces).sort();
    const newList = {};
    for (let i = 0; i < pieceIds.length; i++) {
      const piece = usePieces[pieceIds[i]];
      if (piece.totalCollected === piece.totalCount) {
        // Completed, to not add to list.
        continue;
      }
      newList[pieceIds[i]] = piece;
    }
    setUnsortedParts(newList);
  };

  useEffect(() => {
    updatePartsList();
  }, [usePieces]);

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
          const {
            partId, img, quantity, collected,
          } = set.data.parts[b];
          const prevSets = (parts[partId]) ? parts[partId].sets : {};
          parts[partId] = {
            ...parts[partId],
            id: partId,
            img,
            totalCount: (parts[partId]) ? parts[partId].totalCount + quantity : quantity,
            totalCollected: (parts[partId]) ? parts[partId].totalCollected + collected : collected,
            sets: {
              ...prevSets,
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
  console.log(usePage * perPage);
  return (
    <WorkSpaceStyle>
      <div className="prev" onClick={prevPage}>👈</div>
      <div className="cards">
      {Object.keys(useUnsortedParts).sort().slice(usePage * perPage, usePage * perPage + perPage).map(pieceId => (
        <CardLegoPiece
          key={pieceId}
          piece={usePieces[pieceId]}
          sets={useSetsList}
          collectPart={collectPart}
        />
      ))}
      </div>
      <div className="prev" onClick={nextPage}>👉</div>
      <WaitModal isOpen={isLoading} />
    </WorkSpaceStyle>
  );
};

export default Workspace;
