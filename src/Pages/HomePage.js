import { useEffect, useState } from "react";
import Modal from "../Component/Modal";
import Search from '../Component/Searchbar'

function Home() {
  const [show, setShow] = useState(false);
  const [memes, setMemes] = useState([]);
  const [search,setSearch]=useState("")
  const axios = require("axios");

  const getData = () => {
    axios
      .get(`http://ec2-3-139-63-18.us-east-2.compute.amazonaws.com/api/memes?search=${search}`)
      .then((res) => {
        setMemes(res.data.memes);
      })
      .catch((err) => console.log(err));
  };

  const handleShow = () => {
    setShow(true);
    if (show) {
      setShow(!show);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Search search={setSearch} searData={getData}/>
      <div className="home-c">
        {memes.map((item) => {
          return (
            <>
              <div key={item.id} onClick={handleShow} className="card-c">
                <div  className="card-img">
                  <img  src={item.url} alt="img" />
                </div>
                <div className="card-dis">
                  <p>{item.name}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {show && <Modal item={memes} shows={handleShow} />}
    </>
  );
}
export default Home;
