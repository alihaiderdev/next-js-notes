import useSWR from 'swr';

const DashboardSwr = () => {
  const fetcher = async () => {
    const res = await fetch(`http://localhost:8000/dashboard`);
    const data = await res.json();
    return data;
  };
  const { data, error } = useSWR('dashboard', fetcher);
  if (error) {
    return 'An error has occurred';
  }
  if (!data) {
    return 'Loading ...';
  }
  return (
    <div className='dashboardSwrContainer'>
      <h1>SWR Dashboard</h1>
      <p>
        Posts: <b>{data.posts}</b>
      </p>
      <p>
        Likes: <b>{data.likes}</b>
      </p>
      <p>
        Followers: <b>{data.followers}</b>
      </p>
      <p>
        Following: <b>{data.following}</b>
      </p>
    </div>
  );
};

export default DashboardSwr;
