import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}!`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-4">Contact Me</h1>
      <form className="form card p-3" onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <input
              value={formData.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col-12 mb-3">
            <textarea
              value={formData.message}
              name="message"
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Message"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;
