import React, { useState, useEffect } from "react";

const Companies = ({ loggedIn,userId }) => {
  const [compnee, setCompnee] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCompnies = async () => {
    const res = await fetch("http://localhost:52682/api/Companies");
    const data = await res.json();
    setCompnee(data);
    setLoading(false);
  };
  useEffect(() => {
    getCompnies();
  }, []);

  //Add To Watch List
  const addToWatch=async(id)=>{
    
    
    const res=await fetch("http://localhost:52682/api/WatchList",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        UserId:userId,
        CompanyCode:id
      })
    })
    const data=await res.json();
    console.log(data);
  }

  return loading ? <h2 className="text-center mt-2">Loading...</h2> : (
    <div className="container mt-5">
      <div className="row">
        {compnee.map((company)=>{
          return (
            <div className="col-md-4" key={company.CompanyCode}>
          <div
            className="card text-white bg-primary mb-3"
            style={{ maxWidth: "22rem" }}
          >
            <div className="card-header">{company.CompanyName}</div>
            <div className="card-body">
              <p className="card-text">
               {company.BriefDesc}
              </p>
              <div className="card-footer">
                <div className="d-flex align-items-center">
                  <h4 className="text-white ">Today's Price ${company.CurrentStockPrice}</h4>
                  {loggedIn && (<button className="btn btn-success mx-1" onClick={()=>{addToWatch(company.CompanyCode)}}>Watch</button> )}
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
