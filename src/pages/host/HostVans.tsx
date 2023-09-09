import { fetchHostVans } from 'api/services/fetchHostVans';
import { Link, useLoaderData } from 'react-router-dom';
import { Vans } from 'types/vans';
import { requireAuth } from 'utils/helpers/requireAuth';

export const loader = async () => {
  await requireAuth();
  return fetchHostVans();
};

export const HostVans = () => {
  const { vans } = useLoaderData() as { vans: Vans[] };

  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className='host-van-link-wrapper'>
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
          <h2>No host vans</h2>
        )}
      </div>
    </section>
  );
};
