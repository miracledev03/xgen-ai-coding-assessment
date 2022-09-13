import classes from "./ProductListing.module.css";

const ProductListing = (props) => {
  return (
    <div className={classes.product_listing}>
      <img src={props.data.image} alt={props.data.title} />
      <div className={classes.product_title}>{props.data.title}</div>
      <div className={classes.product_price}>{props.data.price}</div>
    </div>
  );
};

export default ProductListing;
