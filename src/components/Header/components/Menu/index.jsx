import React from "react";
import PropTypes from "prop-types";

export default function Menu(props) {
  const { list } = props;
  return (
    <nav className="menu">
      <div className="container">
        <ul class="menu-nav">
          {list.map((item, index) => {
            return (
              <li key={index} class="menu-item dropdown">
                <a class="menu-link" data-toggle="dropdown" href="#">
                  {item.title}
                  <img src="/img/vector.svg" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
Menu.propTypes = {
  list: PropTypes.array,
};
Menu.defaultProps = {
  list: [],
};
