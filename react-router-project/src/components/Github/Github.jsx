import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/Ankit-Sinha70")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error Occured while fetching the data"));
  });
  return (
    <div className="bg-gray-600 text-center text-white text-3xl p-3 m-3">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github profile" width={300} />
    </div>
  );
}

export default Github;
