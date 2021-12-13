import React from "react";
import PropTypes from "prop-types";

export default function Tag(props) {
  const { list } = props;
  return (
    <div className="tag">
      <h6 class="footer-title">Product tags</h6>
      <ul className="footer__tag">
        {list.map((item, index) => {
          return (
            <li key={index} className="footer__tag-item">
              <a className="item-link" href="#">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
Tag.propTypes = {
  list: PropTypes.array,
};
Tag.defaultProps = {
  list: [],
};
