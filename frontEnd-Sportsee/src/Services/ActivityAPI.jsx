import React from 'react'

export default async function ActivityAPI(Id) {
    const endpoint = `http://localhost:3000/user/${Id}/activity`;
  
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
