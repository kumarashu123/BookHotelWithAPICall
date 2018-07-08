import React from "react";

const MemberList = ({ memberList, handleMemberClicked }) => {
  let memberListNode = memberList.map((m, i) => (
    <li key={i} onClick={() => handleMemberClicked(m)}>
      {m.fname + " " + m.lname}
    </li>
  ));

  return (
    <div className="col-md-3">
      <ul className="list-unstyled member-list">{memberListNode}</ul>
    </div>
  );
};

export default MemberList;
