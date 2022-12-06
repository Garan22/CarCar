import React from 'react';

function ManufacturerList(props) {

    return (
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {props.manufacturers.map(manufacturer => {
                return (
                  <tr key={manufacturer.id}>
                    <td>{manufacturer.name}</td>
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

      export default ManufacturerList;
