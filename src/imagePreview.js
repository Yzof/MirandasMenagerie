import React from 'react';
/*
  TODO
  add an image tag, allow for the src to be passed in as a proc
  add an onClick trigger, that brings up the full image overlay
*/
function imagePreview ({ imageSrc }) {
  return (
    <>
      <image src={imageSrc}></image>
    </>
  )
}

export default imagePreview;