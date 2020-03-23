import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, makeStyles } from '@material-ui/core';
import Button from './lib/buttons/Button';
import { AppContext } from '../context/AppContext';

const PieceStyle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 3.5fr;
`;

const PieceImage = styled(motion.div)`
  background-image: ${props => `url("${props.url}")`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; 
  margin: 1.5rem;           
`;

const PieceBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
`;

const buttonStyle = {
  fontSize: '30px',
};

const buttonStyles = [
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

const profileVariants = {
  min: {
    opacity: 1, position: 'relative', width: 'auto', height: 'auto', zIndex: 0,
  },
  max: {
    opacity: 1, position: 'fixed', top: 0, left: 0, width: '90vw', height: '90vh', zIndex: 99,
  },
};


const CardLegoPiece = ({ piece, sets }) => {
  const { addToCount } = useContext(AppContext);

  const [isMaximized, toggleMaximized] = useState(false);
  const [useQuantity, setQuantity] = useState(piece.sets);

  const handleClick = async (setId) => {
    const prev = useQuantity;
    const { data } = await axios.get('/api/collectPart', {
      params: {
        setId,
        partId: piece.id,
      },
    });
    prev[setId].collected = data.updatedCountTo;
    addToCount(setId);
    setQuantity({ ...prev });
  };

  const notComplete = sets.filter((set, i) => (piece.sets[sets[i]] && (useQuantity[sets[i]].quantity - useQuantity[sets[i]].collected) !== 0)).length;

  return (
    <AnimatePresence>
      {
        notComplete && (
          <motion.div
            key={`motion_${piece.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card style={{ borderRadius: '2rem' }}>
              <PieceStyle>
                <PieceImage
                  onClick={() => toggleMaximized(prev => !prev)}
                  url={piece.img}
                  variants={profileVariants}
                  initial="min"
                  animate={isMaximized ? 'max' : 'min'}
                />
                <PieceBoxes>
                  {sets.map((set, i) => {
                    const toBeSorted = (piece.sets[sets[i]] && (useQuantity[sets[i]].quantity - useQuantity[sets[i]].collected) !== 0);
                    const func = (toBeSorted) ? () => handleClick(sets[i]) : null;
                    return (
                      <Button
                        key={`button_${i}`}
                        style={{ ...buttonStyle, ...buttonStyles[i] }}
                        onClick={func}
                      >
                        {(toBeSorted) ? useQuantity[sets[i]].quantity - useQuantity[sets[i]].collected : '👍'}
                      </Button>
                    );
                  })}
                </PieceBoxes>
              </PieceStyle>
            </Card>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default CardLegoPiece;
