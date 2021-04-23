import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../atoms/Button';

import { buttonVariants } from '../../helpers/atomsTypesAndVariants';

import {
  StyledQuestion,
  StyledButtonsWrapper,
} from './styles/StyledQuestionModal';

const useStyles = makeStyles((theme) => ({
  modal: {
    fontFamily: "'Roboto Condensed', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'reltive',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
    borderRadius: '20px',
    outline: 'none',
    textAlign: 'center',
    width: '35vw',
    '@media (max-width: 768px)': {
      width: '80vw',
    },
  },
}));

const QuestionModal = ({
  isOpen,
  onCloseModal,
  question,
  onNoAnswer,
  onYesAnswer,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={onCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.paper}>
          <StyledQuestion>{question}</StyledQuestion>
          <StyledButtonsWrapper>
            <Button
              clicked={onNoAnswer}
              variant={buttonVariants.questionModal}
              type="button"
              label="No"
            />
            <Button
              clicked={onYesAnswer}
              variant={buttonVariants.questionModal}
              type="button"
              label="Yes"
            />
          </StyledButtonsWrapper>
        </div>
      </Fade>
    </Modal>
  );
};

export default QuestionModal;
