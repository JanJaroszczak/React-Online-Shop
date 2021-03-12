import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector, useDispatch } from 'react-redux';
import { setCartClose, removeProductFromCart } from '../../actions';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: 'none',
    borderRadius: '20px',
    outline: 'none',
    width: '35vw',
    height: '80vh',
  },
  modalHeader: {
    color: 'blue',
  },
}));

const Cart = () => {
  const classes = useStyles();

  const selectedIsCartOpen = useSelector(({ isCartOpen }) => isCartOpen);

  const cartProducts = useSelector(({ cart }) => cart);
  const cartTotalPrice = useSelector(({ totalPrice }) => totalPrice);

  const cartDisplayList = cartProducts.map((product) => (
    <li key={product.productId}>
      {product.productName}
      <button
        onClick={() => dispatch(removeProductFromCart(product.productId))}
      >
        -
      </button>
      <button>+</button>
    </li>
  ));

  const dispatch = useDispatch();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={selectedIsCartOpen}
      onClose={() => dispatch(setCartClose())}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={selectedIsCartOpen}>
        <div className={classes.paper}>
          {/* <h2 className={classes.modalHeader} id="transition-modal-title">
            Transition modal
          </h2> */}
          <ul>{cartDisplayList}</ul>
          <h3>{cartTotalPrice}</h3>
          {/* <p id="transition-modal-description">
            react-transition-group animates me.
          </p> */}
        </div>
      </Fade>
    </Modal>
  );
};

export default Cart;
