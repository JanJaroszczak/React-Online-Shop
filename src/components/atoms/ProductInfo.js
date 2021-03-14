import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addProductToCart } from '../../actions';

import {
  StyledDiv,
  StyledModelName,
  StyledBrandName,
  // StyledPlus,
  StyledPrice,
} from './styles/StyledProductInfo';
import './styles/stylesProductInfo.css';

const ProductInfo = ({ model, brand, price }) => {
  // const [chosenSize, setChosenSize] = useState('-');
  // const [errorVisibility, setError] = useState('none');
  // const [addToCartFailed, setAddToCartFailed] = useState(false);

  // const dispatch = useDispatch();

  // const sizeOptions = sizes.map((size) => {
  //   if (size.availableQuantity > 0) {
  //     return (
  //       <option key={size.size} value={size.size}>
  //         {size.size}
  //       </option>
  //     );
  //   }
  // });

  // useEffect(() => {
  //   if (addToCartFailed)
  //     chosenSize !== '-' ? setError('none') : setError('inline');
  // }, [chosenSize]);

  // const addToCart = () => {
  //   if (chosenSize !== '-') {
  //     dispatch(addProductToCart(productId));
  //     setAddToCartFailed(false);
  //     setError('none');
  //   } else {
  //     setAddToCartFailed(true);
  //     setError('inline');
  //   }
  // };

  // const handleSelectChange = (e) => {
  //   setChosenSize(e.target.value);
  // };

  return (
    <StyledDiv>
      <StyledModelName>{model}</StyledModelName>
      <StyledBrandName>{brand}</StyledBrandName>
      {/* <StyledPlus>
        <i className="fas fa-plus" onClick={addToCart}></i>
        <bdi></bdi>
      </StyledPlus>
      <label htmlFor="size">Size:</label>
      <select
        id="size"
        onChange={(e) => {
          handleSelectChange(e);
        }}
      >
        <option value="-">-</option>
        {sizeOptions}
      </select>
      <label style={{ display: `${errorVisibility}` }}>
        You need to choose a size!
      </label> */}
      <StyledPrice>
        £<span>{price.toFixed(2)}</span>
      </StyledPrice>
    </StyledDiv>
  );
};

export default ProductInfo;
