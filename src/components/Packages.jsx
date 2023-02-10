import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavPackages from "./FavPackages";
const Packages = () => {
  const [packageValue, setPackageValue] = useState(JSON.parse(localStorage.getItem('data')) || null);
  
    const handleDelete=(e)=>{
      const rest=packageValue.filter((el)=>el.fav.package.name!=e.target.value)
      localStorage.removeItem('data');
      localStorage.setItem('data', JSON.stringify(rest));
      setPackageValue(JSON.parse(localStorage.getItem('data')) || null);
  

    }
  if (packageValue == null) {
    return (
      <>
        Add new package tehre are no packages present in list
        <Link to="/add-fav">Add Fav</Link>
      </>
    );
  }

  return (
    <>
       <Link to="/add-fav">Add Fav</Link>
      <FavPackages data={packageValue} handleDelete={handleDelete}/>
    </>
  );
};
export default Packages;
