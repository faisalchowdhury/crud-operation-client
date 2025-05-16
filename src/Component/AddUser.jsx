import React from "react";
import "../App.css";
import Swal from "sweetalert2";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formFields = Object.fromEntries(formData.entries());

    fetch("https://crud-operation-server-eight.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formFields),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `User Created By name ${formFields.name}`,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data);

          form.reset();
        }
      });
  };
  return (
    <>
      <div className="w-4xl mx-auto space-y-5">
        <form onSubmit={handleAddUser} className="grid grid-cols-2 gap-3">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Name</legend>
            <input
              type="text"
              className="input input-field w-full "
              placeholder="Write your name"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Email</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Enter your valid email"
              name="email"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Phone Number</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Phone Number"
              name="phone"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Occupation</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Occupation"
              name="occupation"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Address</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Address"
              name="address"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Photo Url</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Photo URL"
              name="photo_url"
            />
          </fieldset>
          <input
            type="submit"
            className="btn w-full col-span-2"
            value={"Add user"}
          />
        </form>
      </div>
    </>
  );
};

export default AddUser;
