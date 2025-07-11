import { useEffect, useState } from "react";
import "../uniqueStyles/galage.css";
import ParkingPieChart from "../components/manager/pieChart";
import { countMoneyPaid } from "../services/exit/countMoney";

const Garage = () => {
  const [parkedVehicles, setParkedVehicle] = useState([]);
  useEffect(() => {
    const storedVehicles =
      JSON.parse(localStorage.getItem("parkingData")) || {};

    const allParkedVehicles = Object.values(storedVehicles)
      .filter(Array.isArray)
      .flat();

    setParkedVehicle(allParkedVehicles);
  }, []);

  const test = (lisence) => {
    const vehicleToExit = parkedVehicles.find(
      (vehicle) => vehicle.license === lisence
    );

    switch (vehicleToExit.vehicleType) {
      case "truck":
        countMoneyPaid(vehicleToExit, "truck", 2, 3, 3, 2, vehicleToExit);
        break;
      case "car":
        countMoneyPaid(vehicleToExit, "car", 1, 2, 2, 1, vehicleToExit);
        break;
      case "motorcycle":
        countMoneyPaid(
          vehicleToExit,
          "motorcycle",
          0.5,
          1,
          1,
          0.5,
          vehicleToExit
        );
        break;
      default:
        alert("Unsupported vehicle type");
    }
  };

  return (
    <>
      <div className="garage-container">
        <h2 className="garage-title">Current Vehicles in Garage</h2>

        <div className="garage-stats">
          <div className="stat-card">
            <div className="stat-value">{parkedVehicles.length}</div>
            <div className="stat-label">Total Vehicles</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              {parkedVehicles.filter((v) => v.vehicleType === "truck").length}
            </div>
            <div className="stat-label">Trucks</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              {parkedVehicles.filter((v) => v.vehicleType === "car").length}
            </div>
            <div className="stat-label">Cars</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              {
                parkedVehicles.filter((v) => v.vehicleType === "motorcycle")
                  .length
              }
            </div>
            <div className="stat-label">Motorcycles</div>
          </div>
        </div>

        <div className="vehicles-table-container">
          <table className="vehicles-table">
            <thead>
              <tr>
                <th>License Plate</th>
                <th>Vehicle Type</th>
                <th>Entry Date</th>
              </tr>
            </thead>
            <tbody>
              {parkedVehicles.map((vehicle) => (
                <tr key={vehicle.license}>
                  <td>{vehicle.license}</td>
                  <td>{vehicle.vehicleType}</td>
                  <td>{vehicle.startTime}</td>
                  <td>{vehicle.status}</td>
                  <td>
                    <button onClick={() => test(vehicle.license)}>exit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <ParkingPieChart /> */}
    </>
  );
};

export default Garage;
