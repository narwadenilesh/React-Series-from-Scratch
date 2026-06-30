import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()

//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch("https://api.github.com/users/narwadenilesh")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px] text-center">

        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-40 h-40 mx-auto rounded-full border-4 border-orange-500 shadow-lg object-cover"
        />

        <h1 className="text-3xl font-bold mt-5">
          {data.name || data.login}
        </h1>

        <p className="text-gray-500 mt-2">
          @{data.login}
        </p>

        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div>
            <h2 className="text-2xl font-bold text-orange-600">
              {data.followers}
            </h2>
            <p className="text-gray-500">Followers</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-600">
              {data.following}
            </h2>
            <p className="text-gray-500">Following</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-600">
              {data.public_repos}
            </h2>
            <p className="text-gray-500">Repositories</p>
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 duration-300"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/narwadenilesh')
    return response.json()
}