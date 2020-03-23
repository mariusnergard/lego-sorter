import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(3, 3),
    backgroundColor: 'var(--red)',
    lineHeight: '40px',
    fontSize: '28px',
    color: 'var(--white)',
  },
}));

const WaitModal = ({
  isOpen,
  handleClose,
  handleOpen,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      disableBackdropClick
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
          <CircularProgress size={200} color="secondary" />
      </Fade>
    </Modal>
  );
};

export default WaitModal;
