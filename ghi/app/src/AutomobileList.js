import React from 'react';

function AutomobileList(props) {

    return (
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Color</th>
                <th>Year</th>
                <th>Vin</th>
                <th>Model</th>
                <th>Manufacturer</th>
              </tr>
            </thead>
            <tbody>
              {props.autos.map(auto => {
                return (
                  <tr key={auto.id}>
                    <td>{auto.color}</td>
                    <td>{auto.year}</td>
                    <td>{auto.vin}</td>
                    <td>{auto.model.name}</td>
                    <td>{auto.model.manufacturer.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      </div>
      </div>
          </>
        );
      }

      export default AutomobileList;
