import React,{useState,useEffect} from 'react'

const WatchList = ({userId}) => {
  const [watchcompnee, setWatchCompnee] = useState([]);
  const [compnee, setCompnee] = useState([]);
  const getCompnies = async () => {
    const res = await fetch(`http://localhost:52682/api/watchlist/${userId}`);
    const data = await res.json();
    setWatchCompnee(data);
    
  };

  useEffect(() => {
    getCompnies();
  }, []);
  const removeToWatch =async (uId,cId)=>{
    
  try{
    const res=await fetch(`http://localhost:52682/api/WatchList?userId=${uId}&companyCode=${cId}`,{
      method:"DELETE"
    })
    getCompnies();  
  }catch(err){
    console.log(err);

  }
  }
  return (
    <div className='container'>
      <h1 className='mt-3'>Watch List</h1>
      <div className="container mt-5">
      <div className="row">
        {watchcompnee.map((company)=>{
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
                  <button className="btn btn-danger mx-1" onClick={()=>{removeToWatch(userId,company.CompanyCode)}}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default WatchList