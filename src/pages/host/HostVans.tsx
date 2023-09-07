import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Vans } from 'types/vans';

export const HostVans = () => {
  const [vans, setVans] = useState<Vans[]>([]);
  useEffect(() => {
    const fetchHostVans = async () => {
      try {
        const { data } = await axios.get<{ vans: Vans[] }>('/api/host/vans');
        setVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHostVans();
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link to={`${van.id}`} key={van.id} className='host-van-link-wrapper'>
      <div className='host-van-single' key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className='host-van-info'>
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className='host-vans-title'>Your listed vans</h1>
      <div className='host-vans-list'>
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};
