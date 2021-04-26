import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ModalElement from '../molecules/ModalElement';

import { makeStyles } from '@material-ui/core/styles';
import { routes } from '../../routes';
import { setCartClosed } from '../../actions';

import './styles/stylesCartModal.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    fontFamily: "'Roboto Condensed', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // position: 'relative',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
    borderRadius: '20px',
    outline: 'none',
    minWidth: '450px',
    minHeight: '100px',
    '@media (max-width: 768px)': {
      minWidth: '50px',
      width: '90vw',
      maxHeight: '80vh',
      padding: theme.spacing(1, 1, 1),
    },
  },
}));

const CartModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectedIsCartOpen = useSelector(
    ({ productsAndCart }) => productsAndCart.isCartOpen
  );

  const cartProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.cart
  );

  const cartTotalPrice = useSelector(
    ({ productsAndCart }) => productsAndCart.totalPrice
  );
  const currentUser = useSelector(({ user }) => user.currentUser);

  const cartProductsModalList = cartProducts.map((product) => (
    <li key={product.cartProductId}>
      <ModalElement product={product} cartModal />
    </li>
  ));

  const { cart, checkout, authbeforecheckout } = routes;

  const renderCartContent = () => (
    <>
      {cartProducts.length > 0 && (
        <div className="modalWrapper">
          <div className="productsListWrapper">
            <ul>{cartProductsModalList}</ul>
          </div>
          <div className="modalFooterWrapper">
            <div className="buttonViewCart">
              <Link to={cart}>
                <button type="button" onClick={() => dispatch(setCartClosed())}>
                  View Cart Details
                </button>
              </Link>
            </div>
            <div className="buttonCheckout">
              <Link to={currentUser ? checkout : authbeforecheckout}>
                <button type="button" onClick={() => dispatch(setCartClosed())}>
                  Checkout
                </button>
              </Link>
            </div>
            <div className="buttonContinueShopping">
              <button type="button" onClick={() => dispatch(setCartClosed())}>
                Continue Shopping
              </button>
            </div>
            <div className="totalPrice">
              <span>Total price: ${cartTotalPrice}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={selectedIsCartOpen}
      onClose={() => dispatch(setCartClosed())}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={selectedIsCartOpen}>
        <div className={classes.paper}>
          {cartProducts.length !== 0 && (
            <h3 className="cartHeading">Your cart:</h3>
          )}
          {renderCartContent()}
          {cartProducts.length === 0 && (
            <h2 className="emptyCart">Your cart is empty!</h2>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default CartModal;
