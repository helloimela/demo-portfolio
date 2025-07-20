"use client";

import { useState, useEffect } from "react";

interface UserProps {
  name: string;
  avatar: string;
  id: string;
}

export default function Users() {
  const [usersData, setUsersData] = useState<UserProps[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://687a6fa2abb83744b7ecd77b.mockapi.io/api/v1/users"
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      if (error instanceof Error) setErrorMsg(error.message);
      else setErrorMsg("An unknown error occured");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h1 className="h1">Loading data...</h1>;
  if (errorMsg.length > 0) return <h1 className="h1">{errorMsg}</h1>;

  return (
    <div>
      <h1 className="text-2xl">Users</h1>
      <ul className="grid grid-cols-3 gap-4">
        {usersData &&
          usersData.map((user) => (
            <li key={user.id} className="flex flex-column border border-gray-300 rounded-s items-center gap-2 p-2">
              <span className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img src={user.avatar} alt={user.name} className="w-full"/>
              </span>
              <span className="h2">{user.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
