import React from "react";

let year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ Tyler Johnson {year}</p>
    </footer>
  );
}

export default Footer;
