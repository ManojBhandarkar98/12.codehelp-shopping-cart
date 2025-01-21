import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const output = await fetch(API_URL);
      const json = await output.json();
      setPosts(json);
    }
    catch (error) {
      console.log("Error Came");
      setPosts([]);
    }

    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center">
      {
        loading ? <Spinner /> :
          ((posts.length > 0) ?
            (<div>
              {
                posts.map((post) => (
                  <Product key={post.id} post={post} />
                ))
              }
            </div>) :
            (<div>
              <p>No data Found</p>
            </div >)
          )
      }
    </div >
  );
};

export default Home;
