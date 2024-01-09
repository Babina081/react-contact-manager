import React from "react";
import User from "../images/user.jpg";
import { useParams, Link } from "react-router-dom";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) {
    return (
      <div className="main">
        <p>Contact not found</p>
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    );
  }

  const { name, email } = contact;
  return (
    <div className="main">
      <h2>Contact Detail</h2>

      <div className="ui card centered">
        <div className="image">
          <img src={User} alt="User" />
        </div>
        <div className="content">
          <div className="header">Name: {name}</div>
          <div className="description">Email: {email}</div>
          <div className="description">id: {id}</div>
        </div>
      </div>

      <div
        className="center-div"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <button className="ui button blue">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
