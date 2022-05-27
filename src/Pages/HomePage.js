import { useState } from "react";

function Home() {
  const [memes, setMemes] = useState([]);
  const axios = require("axios");

  axios
    .get("http://ec2-3-139-63-18.us-east-2.compute.amazonaws.com/api/memes")
    .then((res) => {
      setMemes(res.data.memes);
      console.log(res);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <div className="home-c">
        {memes.map((item) => {
          return (
            <a href={item.url} target="_blank">
              <div className="card-c" key={item.id}>
                <div className="card-img">
                  <img src={item.url} alt="img" />
                </div>
                <div className="card-dis">
                  <p>{item.name}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
export default Home;
