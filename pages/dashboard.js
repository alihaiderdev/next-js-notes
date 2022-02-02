import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(async () => {
    try {
      const res = await fetch(`http://localhost:8000/dashboard`);
      const data = await res.json();
      setDashboardData(data);
      setIsLoading(false);
    } catch (error) {
      console.log('error: ', error);
    }
  }, []);
  console.log('data: ', dashboardData);

  return (
    <div
      className='dashboardContainer'
      style={{ width: '75%', margin: '5rem auto' }}
    >
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <h1>Dashboard</h1>
          <p>
            Posts: <b>{dashboardData.posts}</b>
          </p>
          <p>
            Likes: <b>{dashboardData.likes}</b>
          </p>
          <p>
            Followers: <b>{dashboardData.followers}</b>
          </p>
          <p>
            Following: <b>{dashboardData.following}</b>
          </p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
