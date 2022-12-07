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
              </tr>
            </thead>
            <tbody>
              {props.automobiles.map(automobile => {
                return (
                  <tr key={automobile.id}>
                    <td>{automobile.color}</td>
                    <td>{automobile.year}</td>
                    <td>{automobile.vin}</td>
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
