export const UseTransformedActivitiesData = (data) => {
    let ArrayCopy = [...data.data.data];
    let newArray = ["intensité","Vitesse","Force","Endurance","Energie","Cardio"];
    for (let i = 0; i < ArrayCopy.length; i++) {
      ArrayCopy[i].kind = newArray[i];
    }
    return ArrayCopy;
  };
  