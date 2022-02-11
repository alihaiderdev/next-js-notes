import { useRouter } from 'next/router';
import { useState } from 'react';

const Events = ({ eventList }) => {
  const router = useRouter();
  let [url, setUrl] = useState('');
  const [events, setEvents] = useState(eventList);

  const fetchEventsByCategory = async (category) => {
    const res = await fetch(
      `http://localhost:8000/events?category=${category}`
    );
    const filteredEvents = await res.json();
    setEvents(filteredEvents);
    // if (category === undefined) {
    //   setUrl('');
    // } else {
    //   setUrl(`/events?category=${category}`);
    // }
    // router.push(url, undefined, { shallow: true });
    router.push(`/events?category=${category}`, undefined, { shallow: true });
  };

  console.log('filteredEvents: ', events);

  return (
    <div className='eventsContainer'>
      <button onClick={() => fetchEventsByCategory('food')}>Food</button>
      <button onClick={() => fetchEventsByCategory('technology')}>
        Technology
      </button>
      <button onClick={() => fetchEventsByCategory('sports')}>Sports</button>
      <h1>List of events</h1>
      {events.length > 0 &&
        events.map((event) => (
          <h3 key={event.id}>
            {event.title} - {event.description} - {event.date} |{' '}
            {event.category}
          </h3>
        ))}
    </div>
  );
};

export default Events;

export async function getServerSideProps(context) {
  const {
    query: { category },
  } = context;
  const queryString = category !== undefined ? `category=${category}` : '';
  const res = await fetch(`http://localhost:8000/events?${queryString}`);
  const eventList = await res.json();
  return {
    props: { eventList },
  };
}
