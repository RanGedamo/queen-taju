import React    from "react";
import template from "./Gallery.jsx";

class Gallery extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Gallery;
