import React from "react";
import { Link, useParams } from "react-router-dom";

const DeleteContact = ({ contacts, removeContactHandler }) => {
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

  const handleDelete = () => {
    removeContactHandler(id);
  };

  return (
    <div className="main ui">
      <h2>Delete Contact</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          flexDirection: "column",
        }}
      >
        <p>Are you sure you want to delete the contact: </p>
        <p>{contact.name}?</p>
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Link to="/">
            <button className="ui  button green" onClick={handleDelete}>
              Yes, Delete
            </button>
          </Link>
          <Link to="/">
            <button className="ui button red">Cancel </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
