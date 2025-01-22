const Product = ({ post }) => {
  return (<div>
    <div>
      <p>{post.title}</p>
    </div>

    <div>
      <p>{post.description}</p>
    </div>
    <div>
      <img src={post.image} />
    </div>
    <div><p>Rs.{post.price}</p></div>
    <button>
      {
        true ? <p>Remove Item</p> : <p>Add to Cart</p>
      }
    </button>
    <br />
  </div>);
};

export default Product;
