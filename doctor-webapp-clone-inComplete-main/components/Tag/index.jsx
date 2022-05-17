import React, { useState } from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

function Example () {
  const [tags, setTags] = useState(["example tag"]);

  return (
    <ReactTagInput 
      tags={tags} 
      onChange={(newTags) => setTags(newTags)}
    />
  )
}
export default Example;