import React from "react";
import { useLoaderData } from "react-router";

const UserList = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-5 ">
        {data.map((user) => (
          <div className="p-5 bg-slate-200 rounded-xl shadow">
            <img
              className="w-[70px] h-[70px] rounded-full object-cover"
              src={user.photo_url}
              alt=""
            />
            <h3>Name :{user.name}</h3>
            <p>Email :{user.email} </p>
            <p>Address : {user.address}</p>
            <p>Occupation : {user.occupation}</p>
            <br />
            <div className="space-x-3">
              <button className="btn bg-yellow-600 text-white border-none rounded-full">
                Edit Profile
              </button>

              <button className="btn bg-red-600 text-white border-none rounded-full">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
