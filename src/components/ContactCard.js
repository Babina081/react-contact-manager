import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  console.log(props);

  const { id, img, name, email } = props.contact;
  return (
    <div className=" item">
      <img className="ui avatar image" src={img} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link to={`/contact/${id}/delete`}>
        <i
          className="trash alternate outline icon red right floated"
          style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        />
      </Link>
      <Link
        to={{
          pathname: `/edit/${id}`,
          state: { contact: props.contact },
        }}
      >
        <i
          className="edit alternate outline icon yellow right floated"
          style={{ color: "yellow", marginTop: "7px", marginLeft: "auto" }}
        />
      </Link>
    </div>
  );
};

export default ContactCard;
