import React from "react";
import PropTypes from "prop-types";

export default function WeatherTable({ temp, sky, humidity, visibility }) {
  const rows = [
    {
      header: "Temperature(°C)",
      row: temp + "°C",
    },
    {
      header: "Cloudiness",
      row: sky,
    },
    {
      header: "Humidity",
      row: humidity,
    },
    {
      header: "Visibility range",
      row: visibility + "m",
    },
  ];

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3 lg:text-2xl">
                Weather
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <tr className="odd:bg-white  odd:text-gray-800 even:text-gray-600  border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium lg:text-xl  whitespace-nowrap "
                    >
                      {_.header}
                    </th>
                    <td className="px-6 py-4 lg:text-lg">{_.row}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

WeatherTable.propTypes = {
  temp: PropTypes.string,
  sky: PropTypes.string,
  humidity: PropTypes.string,
  visibility: PropTypes.string,
};
