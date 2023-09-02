import React from 'react'

export default function CallsAPI() {
   const communicationActivity =  fetch("http://localhost:3000/user/18").then((response) => response.json()).then((data) => console.log(data));
   const communicationSessions = fetch("http://localhost:3000/user/18/average-sessions").then((response) => response.json());
 
}
