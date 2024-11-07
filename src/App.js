import React, { useState } from "react";
import "./App.css"; // Import App.css for styling

function App() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    terms: false,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Set the submitted data
  };

  return (
    <div className="App">
      <h1>Data Entry Form - Created by Hemin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="1234 Main St"
          />
        </div>
        <div>
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
          </div>
          <div>
            <label>Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">
                Newfoundland and Labrador
              </option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
            />
          </div>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            Agree Terms & Condition?
          </label>
        </div>
        <button type="submit" disabled={!formData.terms}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <table>
            <tbody>
              <tr>
                <td>Email:</td>
                <td>{submittedData.email}</td>
              </tr>
              <tr>
                <td>Full Name:</td>
                <td>{submittedData.fullName}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{submittedData.address}</td>
              </tr>
              <tr>
                <td>Address 2:</td>
                <td>{submittedData.address2}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{submittedData.city}</td>
              </tr>
              <tr>
                <td>Province:</td>
                <td>{submittedData.province}</td>
              </tr>
              <tr>
                <td>Postal Code:</td>
                <td>{submittedData.postalCode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
