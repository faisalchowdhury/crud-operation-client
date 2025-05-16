import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const data = useLoaderData();
  console.log(data);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formFields = Object.fromEntries(formData);

    fetch(
      `https://crud-operation-server-eight.vercel.app/update-user/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formFields),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <h3 className="text-center text-3xl">Update User</h3>
      <div className="w-4xl mx-auto space-y-5">
        <form onSubmit={handleUpdateUser} className="grid grid-cols-2 gap-3">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Name</legend>
            <input
              type="text"
              className="input input-field w-full "
              placeholder="Write your name"
              name="name"
              defaultValue={data.name}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Email</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Enter your valid email"
              name="email"
              defaultValue={data.email}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Phone Number</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Phone Number"
              name="phone"
              defaultValue={data.phone}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Occupation</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Occupation"
              name="occupation"
              defaultValue={data.occupation}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Address</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Address"
              name="address"
              defaultValue={data.address}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend text-xl">Photo Url</legend>
            <input
              type="text"
              className="input input-field w-full"
              placeholder="Photo URL"
              name="photo_url"
              defaultValue={data.photo_url}
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

export default UpdateUser;
