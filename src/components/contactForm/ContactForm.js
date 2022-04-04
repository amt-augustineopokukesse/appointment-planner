import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          // regex for Ghana phone numbers
          //pattern="^\+?\(?(([2][3][3])|[0])?\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$"
          pattern="^[0]\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$"
          //placeholder="+ 233 xx xxx xxxx or 0 xx xxx xxxx or xx xxx xxxx"
          placeholder="0xx xxx xxxx"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
      
    </form>
  );
};