import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Feed = () => {
  const [feed, setfeed] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/post")
      .then((res) => {
        setfeed(res.data.posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="h-screen bg-[#E9E9E9] flex gap-4 flex-wrap">
      {feed.map((elem) => (
        <div
          key={elem._id}
          className="w-[339px] rounded-2xl ml-3 mt-4"
        >
          <div className="flex flex-col relative">
            <div className="absolute bottom:0">
       <Button
  id={elem._id}
  onDelete={() =>
    setfeed(feed.filter(post => post._id !== elem._id))
  }
/>
            </div>

            <img
              src={elem.image}
              alt={elem.caption}
              className="object-cover w-full h-64 rounded-lg"
            />

            <div className="w-full text-sm text-black mt-2 rounded-2xl">
              {elem.caption}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;

