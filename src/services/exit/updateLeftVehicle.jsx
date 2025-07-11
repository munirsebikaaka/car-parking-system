export const updateLeftVehicle = (values) => {
  const parkingData = JSON.parse(localStorage.getItem("parkingData")) || {};

  for (const userId in parkingData) {
    const userVehicles = parkingData[userId];
    if (Array.isArray(userVehicles)) {
      const vehicleIndex = userVehicles.findIndex(
        (v) => v.license === values.license
      );

      console.log(vehicleIndex);
      if (vehicleIndex !== -1) {
        // Update the status of the matched vehicle
        userVehicles[vehicleIndex] = {
          ...userVehicles[vehicleIndex],
          status: "left",
        };

        // Update the parkingData object
        parkingData[userId] = userVehicles;

        // Save back to localStorage
        localStorage.setItem("parkingData", JSON.stringify(parkingData));

        // Exit the function after updating
        return;
      }
    }
  }
};
