import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import Button from '../atoms/Button';

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
    width: '35vw',
  },
}));

const StyledQuestion = styled.h2`
  margin: 10px 0 20px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  /* border: 1px solid black; */
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

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
              variant="questionModal"
              type="button"
              label="No"
            />
            <Button
              clicked={onYesAnswer}
              variant="questionModal"
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
