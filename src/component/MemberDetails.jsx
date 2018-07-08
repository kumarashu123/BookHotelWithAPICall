import React from "react";

const MemberDetails = ({ memberDetail }) => {
  return (
    <div className="col-md-9">
      <table className="table table-bordered table-striped member-details">
        {memberDetail ? (
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{memberDetail.fname}</td>
            </tr>
            <tr>
              <th>Last Name</th>

              <td>{memberDetail.lname}</td>
            </tr>
            <tr>
              <th>Email</th>

              <td>{memberDetail.email}</td>
            </tr>
            <tr>
              <th>Mobile</th>

              <td>{memberDetail.mobileNumber}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{memberDetail.address}</td>
            </tr>
          </tbody>
        ) : (
          <tr>
            <th>Select member from left menu for details</th>
          </tr>
        )}
      </table>
    </div>
  );
};

export default MemberDetails;
