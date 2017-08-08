import React from "react";

const Header = props => {
  return (
    <h1 className="bingo">
      {props.header}
    </h1>
  );
};

export default Header;
