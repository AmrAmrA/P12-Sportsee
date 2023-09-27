import React from 'react'
import { isDataMocked } from '../config';
export default async function ActivitiesPerformances(Id) {
    const endpoint = isDataMocked ? `../../src/Mock/ActivitiesPerformances.json`: `http://localhost:3000/user/${Id}/performance`;
  
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