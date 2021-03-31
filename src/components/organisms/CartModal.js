import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector, useDispatch } from 'react-redux';
import { setCartClosed } from '../../actions';

import CartModalElement from '../molecules/CartModalElement';
import './styles/stylesCartModal.css';

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
    minWidth: '450px',
    minHeight: '100px',
  },
}));

const CartModal = () => {
  const classes = useStyles();

  const selectedIsCartOpen = useSelector(({ isCartOpen }) => isCartOpen);
  const cartProducts = useSelector(({ cart }) => cart);
  const cartTotalPrice = useSelector(({ totalPrice }) => totalPrice);
  const currentUser = useSelector(({ currentUser }) => currentUser);

  const cartProductsModalList = cartProducts.map((product) => (
    <li key={product.cartProductId}>
      <CartModalElement product={product} />
    </li>
  ));

  const dispatch = useDispatch();

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
          {cartProducts.length > 0 && (
            <div className="modalWrapper">
              <div className="productsListWrapper">
                <ul>{cartProductsModalList}</ul>
              </div>
              <div className="modalFooterWrapper">
                <div className="buttonViewCart">
                  <Link to={routes.cart}>
                    <button onClick={() => dispatch(setCartClosed())}>
                      View Cart Details
                    </button>
                  </Link>
                </div>
                <div className="buttonCheckout">
                  <Link
                    to={
                      currentUser ? routes.checkout : routes.authbeforecheckout
                    }
                  >
                    <button onClick={() => dispatch(setCartClosed())}>
                      Checkout
                    </button>
                  </Link>
                </div>
                <div className="buttonContinueShopping">
                  <button onClick={() => dispatch(setCartClosed())}>
                    Continue Shopping
                  </button>
                </div>
                <div className="totalPrice">
                  <span>Total price: ${cartTotalPrice}</span>
                </div>
              </div>
            </div>
          )}
          {cartProducts.length === 0 && (
            <h2 className="emptyCart">Your cart is empty!</h2>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default CartModal;

// const cartProductsModalList = cartProducts.map((product) => (
//   <li key={product.cartProductId} style={{ fontSize: `15px` }}>
//     {product.productName}__{product.chosenOption.size}__
//     {product.chosenOption.quantity}
//     <button
//       onClick={() =>
//         dispatch(
//           decreaseProductCartQuantity(product.productId, product.cartProductId)
//         )
//       }
//       style={{ marginLeft: `5px` }}
//     >
//       -
//     </button>
//     <button
//       onClick={() =>
//         dispatch(
//           addProductToCart(product.productId, product.chosenOption.size, 1)
//         )
//       }
//       style={{ marginLeft: `5px` }}
//     >
//       +
//     </button>
//     <button
//       onClick={() =>
//         dispatch(
//           removeProductFromCart(product.productId, product.cartProductId)
//         )
//       }
//       style={{ marginLeft: `5px` }}
//     >
//       X
//     </button>
//   </li>
// ));
