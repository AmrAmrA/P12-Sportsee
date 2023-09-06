/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";

// export default function CallsAPI(Id) {
//   const endpoint = `http://localhost:3000/user/${Id}`;

//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     fetch(endpoint)
//       .then((res) => res.json())
//       .then((res) => {
//         setUserData(res);
//       });
//   }, [Id]);
//   return { userData }
// }

import React from 'react'

export default async function CallsAPI (Id) {
    const endpoint = `http://localhost:3000/user/${Id}`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data) return null
      return data;
    } catch (error) {
      console.error("Fetch error: ", error);
      throw error;
    }
  }