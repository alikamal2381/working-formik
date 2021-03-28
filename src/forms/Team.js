import React from "react";

function Team() {
  return (
    <>
      <h3>Team: </h3>
      <div className="team">
        <form>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" />

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default Team;
