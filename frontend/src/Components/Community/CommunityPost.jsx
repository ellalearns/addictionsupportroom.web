import React, { useState } from "react";
import useFetch from "../../API/userFetch";
import AddPosts from "../../Pages/Community/AddPosts";
import ComPosts from "./Posts";

const CommunityPost = ({ username, avatar }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    data: posts,
    isPending,
    error,
  } = useFetch("https://soberpal.hng.tech/api/forum/");

  return (
    <div className="max-w-[800px] bg-[#F5F5F5] my-16 py-10 mx-auto w-full tablet:w-[90%] rounded-[14px]">
      <div className="w-[90%] mx-auto mb-16">
        <div
          to="/community/addPosts"
          onClick={() => setShowModal(true)}
          className="flex gap-3 justify-between border-2 border-[#BBBBBB] bg-white p-2 w-full rounded-[14px]"
        >
          <img
            className="w-[40px] h-[40px] border-2 border-[#BBBBBB] rounded-full"
            src={avatar}
            alt="hh"
          />
          <input
            type="text"
            disabled
            className="w-full text-[14px] p-2 h-[40px] rounded-lg bg-[#F5F5F5]"
            placeholder="Post something to everyone"
            name="post"
          />
          <button
            onClick={() => setShowModal(false)}
            disabled
            className="py-2 px-4 bg-blue rounded-md text-white"
          >
            Share
          </button>
        </div>
      </div>
      {showModal && <AddPosts setShowModal={setShowModal} />}
      {error && (
        <div className="text-blue text-[24px] font-[500] text-center">
          {error}
        </div>
      )}
      {isPending && (
        <div className="text-blue text-[24px] font-[500] text-center">
          Loading...
        </div>
      )}
      {posts && <ComPosts posts={posts} />}
    </div>
  );
};

export default CommunityPost;
