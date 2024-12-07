import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Components/AuthProvider';
import Loading from '../../Loading/Loading';
import { data } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCampaign = () => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>
  }

  // State for form data
  const [formData, setFormData] = useState({
    thumbnail: "",
    title: "",
    type: "personal",
    description: "",
    minDonation: "",
    startedDate: "",
    deadline: "",
    email: user?.email,
    name: user?.displayName,
  });
console.log(formData)
  //  Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    // const form = e.target;
    // const thumbnail = form.thumbnail.value;
    // const title = form.title.value;
    // const type = form.type.value;
    // const description = form.description.value;
    // const number = form.number.value;
    // const date = form.date.value;
    // const name = form.name.value;
    // const newCampaign={thumbnail, title, type, description, number, date, name}
    // console.log(newCampaign)


    // Add form submission logic here (e.g., API call)

    fetch('http://localhost:5000/campaign', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(formData)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'campaign added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-base-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Thumbnail */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Campaign Thumbnail (Image URL)</span>
          </label>
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
          />
        </div>

        {/* Campaign Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Campaign Title</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the campaign title"
            className="input input-bordered w-full"
          />
        </div>

        {/* Campaign Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Campaign Type</span>
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="personal">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a detailed description of the campaign"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Minimum Donation */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Minimum Donation Amount</span>
          </label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            placeholder="Enter minimum donation amount"
            className="input input-bordered w-full"
          />
        </div>
        {/* started Date */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Started Date</span>
          </label>
          <input
            type="date"
            name="startedDate"
            value={formData.startedDate}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>


        {/* Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* User Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* User Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Add Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCampaign;