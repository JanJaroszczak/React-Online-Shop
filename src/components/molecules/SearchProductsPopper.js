import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    width: '400px',
    height: '500px',
  },
}));

const SearchProductsPopper = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);

  const products = useSelector(({ products }) => products);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setSearchInputValue(event.target.value);
  };

  const filterProducts = () => {
    if (searchInputValue.length > 0) {
      const filteredProducts = products.filter((product) => {
        const productNameLowerCase = product.productName.toLowerCase();
        const searchToLowerCase = searchInputValue.toLowerCase();

        return (
          searchToLowerCase ===
          productNameLowerCase.slice(0, searchInputValue.length)
        );
      });

      setSearchProducts(filteredProducts);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [searchInputValue]);

  return (
    <div>
      <input
        aria-describedby="transitions-popper"
        type="text"
        value={searchInputValue}
        onChange={handleClick}
      />

      <Popper
        id="transitions-popper"
        open={searchInputValue.length > 0 ? true : false}
        anchorEl={anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
              {searchProducts.length === 0 ? (
                <p>no such product</p>
              ) : (
                <ul>
                  {searchProducts.map((item) => {
                    return <li>{item.productName}</li>;
                  })}
                </ul>
              )}
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default SearchProductsPopper;
