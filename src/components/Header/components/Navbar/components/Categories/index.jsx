import React from "react";

export default function Categories() {
  return (
    <div className="navbar__categories">
      <form className="navbar__form">
        <div className="form-group">
          <select className="custom-select">
            <option selected>All Categories</option>
            <option>Bakery</option>
            <option>Fruit and vegetables</option>
            <option>Meat and fish</option>
          </select>
          <img className="img-select" src="/img/vector.svg" />
        </div>
        <div className="input-group input-group-merge">
          <input
            className="form-control"
            type="search"
            placeholder="Search Products, categories ..."
          />
          <button className="btn" type="submit">
            <img src="/img/ic-actions-search.svg" />
          </button>
        </div>
      </form>
    </div>
  );
}
