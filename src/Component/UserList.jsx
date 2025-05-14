import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UserList = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want Delete this user ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/user-delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              const newUsers = users.filter((user) => user._id != id);
              setUsers(newUsers);
            }
          });
      } else if (result.isDenied) {
      }
    });
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-5 ">
        {users.map((user) => (
          <div key={user._id} className="p-5 bg-slate-200 rounded-xl shadow">
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

              <button
                onClick={() => handleDelete(user._id)}
                className="btn bg-red-600 text-white border-none rounded-full">
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
