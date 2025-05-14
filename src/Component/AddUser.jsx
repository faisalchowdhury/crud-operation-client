import React from "react";

const AddUser = () => {
  return (
    <div className="w-4xl mx-auto space-y-5">
      <form action="" className="grid grid-cols-2 gap-5">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend text-xl">Name</legend>
          <input type="text" className="input w-full" placeholder="My awesome page" />
          

        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend text-xl">Email</legend>
          <input type="text" className="input w-full" placeholder="My awesome page" />
          

        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend text-xl">Phone Number</legend>
          <input type="text" className="input w-full" placeholder="My awesome page" />
          

        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend text-xl">Occupation</legend>
          <input type="text" className="input w-full" placeholder="My awesome page" />
          

        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend text-xl">Address</legend>
          <input type="text" className="input w-full" placeholder="My awesome page" />
          

        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend text-xl">Photo Url</legend>
          <input type="text" className="input w-full" placeholder="My awesome page" />
          

        </fieldset>


      </form>
        <button className="btn w-full">Add User</button>
    </div>
  );
};

export default AddUser;
