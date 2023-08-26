import React from "react";
import "./header.css";

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <>
      <h1 title="Header" className="header">
        {title}
      </h1>
      {/* <h3 className="header">Cats</h3> */}
    </>
  );
};

export default Header;
