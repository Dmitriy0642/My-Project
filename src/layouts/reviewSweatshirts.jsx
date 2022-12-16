import React from "react";

const ReviewSweatshorts = ({ match }) => {
  const postId = match.params.postId;
  return <div>{postId}</div>;
};

export default ReviewSweatshorts;
