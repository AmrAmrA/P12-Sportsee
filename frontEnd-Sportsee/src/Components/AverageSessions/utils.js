// utils.js
export const mapDaysToLetters = (sessions) => {
    const daysWithLetters = ["L", "M", " M ", "J", "V", "S", "D"];
    return sessions.map((session, index) => ({
      ...session,
      day: daysWithLetters[index],
    }));
  };  

  // utils.js
export const extractSessionDurations = (sessions) => {
    return sessions.map(session => session.sessionLength);
  };  