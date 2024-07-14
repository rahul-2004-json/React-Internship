import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [searchquery, setSearchQuery] = useState();
  const [showdropdown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    //This will work only when the length of the query is greater than 2
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(e) {
    setSearchQuery(e.target.innerText);
    setShowDropDown(false);
    setFilteredUsers([]);
  }

  async function fetchAllUsers() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setLoading(false);
        setUsers(data.users.map((dataItem) => dataItem.firstName)); // mapping over the recieved data and only setting the firstname inside the users state
        setErrors(null);
      }
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  console.log(users, filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data! Please Wait</h1>
      ) : (
        <input
          name="search-users"
          placeholder="Enter value to be searched"
          value={searchquery}
          onChange={handleChange}
        />
      )}

      {showdropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
