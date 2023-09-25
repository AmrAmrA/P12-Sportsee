import React from 'react'

export default async function ActivityAPI(Id) {
    const isDataMocked = false;
    const endpoint = isDataMocked ? `../../src/Mock/DailySessions.json` : `http://localhost:3000/user/${Id}/activity`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      if (!data) return null
      
      if(isDataMocked){
        const FoundData = data.find(el => el.userId === Number(Id))
        data = { data: FoundData}
      }
      return data;
    } catch (error) {
      console.error("Fetch error: ", error);
      throw error;
    }
}