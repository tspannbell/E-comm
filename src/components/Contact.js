import React from "react";
import "../style/Contact.css"

export default function Contact() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [area, setArea] = React.useState("");
    const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  
    const handleSubmit = (event) => {
      console.log(`
        Email: ${email}
        Password: ${password}
        Name: ${name}
        Area: ${area}
        Accepted Terms: ${acceptedTerms}
      `);
      
      event.preventDefault();
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>Contact us</h1>
        <label>
          Name:
          <input
            name="name"
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required />
        </label>
        
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required />
        </label>

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required />
        </label>

        <label className ="area">
          Text Area:
          <input 
            name="area"
            type="area"
            value={area}
            onChange={e => setArea(e.target.value)}
            required />
        </label>
  
       
        <label>
          <input
            name="acceptedTerms"
            type="checkbox"
            onChange={e => setAcceptedTerms(e.target.value)}
            required />
          I accept the terms of service        
        </label>
  
        <button>Submit</button>
      </form>
    );
  }
  

//   export default Contact;