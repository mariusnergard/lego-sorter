import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, makeStyles } from '@material-ui/core';
import Button from './lib/buttons/Button';

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


const CardLegoPiece = ({ piece, sets, setPartComplete }) => {
  const [isMaximized, toggleMaximized] = useState(false);
  const [isLoading, toggleLoading] = useState(true);
  const [useQuantity, setQuantity] = useState();

  useEffect(() => {
    setQuantity(piece.sets);
    toggleLoading(false);
  }, []);

  const handleClick = (index) => {
    const prev = useQuantity;
    prev[index].collected += 1;
    setQuantity({ ...prev });
    if (prev[index].quantity - prev[index].collected === 0) {
      setPartComplete(piece.id);
    }
  };

  if (isLoading) return <p />;

  return (
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
  );
};

export default CardLegoPiece;
