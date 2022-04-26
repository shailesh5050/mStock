import React, { useState, useEffect } from "react";

const Companies = ({ loggedIn }) => {
  const [compnee, setCompnee] = useState([]);
  const getCompnies = async () => {
    const res = await fetch("http://localhost:52682/api/Companies");
    const data = await res.json();
    setCompnee(data);
    console.log(data);
  };
  useEffect(() => {
    getCompnies();
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        {compnee.map((company)=>{
          return (
            <div className="col-md-4">
          <div
            class="card text-white bg-primary mb-3"
            style={{ maxWidth: "22rem" }}
          >
            <div class="card-header">{company.CompanyName}</div>
            <div class="card-body">
              <p class="card-text">
               {company.BriefDesc}
              </p>
              <div class="card-footer">
                <div className="d-flex align-items-center">
                  <h5 className="text-white mx-1">Today's Price ${company.CurrentStockPrice}</h5>
                  <button className="btn btn-success">Watch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  );
};

export default Companies;
