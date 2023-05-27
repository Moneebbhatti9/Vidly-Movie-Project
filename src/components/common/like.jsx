import React from "react";

const Like = (props) => {
  let likeClasses = "fa fa-heart";
  if (!props.liked) likeClasses += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={likeClasses}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
