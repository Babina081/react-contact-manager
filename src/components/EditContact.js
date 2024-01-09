import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditContact = ({ contacts, updateContactHandler }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [contact, setContact] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    const existingContact = contacts.find((c) => c.id === id);
    if (existingContact) {
      setContact(existingContact);
    }
  }, [id, contacts]);

  const handleUpdate = (event) => {
    event.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All fields are mandatory!");
      return;
    }

    updateContactHandler(contact);
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={handleUpdate}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleInputChange}
          />
        </div>
        <button className="ui button blue">Update</button>
        <Link to="/">
          <button className="ui button green" style={{ float: "right" }}>
            Check Your Contact List
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditContact;
