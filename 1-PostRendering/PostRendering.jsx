import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function PostRendering() {
  const [] = useState();
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    res.json().then(() => {});
  });

  return;
}
export { PostRendering };
