import React from "react";
import "./header.css";

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <h1 title="Header" className="header">
      {title}
    </h1>
  );
};

export default Header;
