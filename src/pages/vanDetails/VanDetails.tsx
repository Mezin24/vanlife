import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Vans } from 'types/vans';

type VanDetailsParams = {
  id: string;
};

interface LocationState {
  search: string;
}

export const VanDetails = () => {
  const { id } = useParams<VanDetailsParams>();
  const [van, setVan] = useState<Vans | null>(null);
  const location = useLocation();
  const search = (location.state as LocationState)?.search;
  const type = search.substring(
    search.indexOf('type=') + 1,
    search.lastIndexOf('&')
  );
  console.log(type);

  useEffect(() => {
    const fetchVan = async () => {
      try {
        const { data } = await axios.get<{ vans: Vans }>(`/api/vans/${id}`);
        setVan(data.vans);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVan();
  }, [id]);

  if (!id) return null;

  return (
    <div className='van-detail-container'>
      <Link
        to={`..${search ? `?${search}` : ''}`}
        relative='path'
        className='back-button'
      >
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className='van-detail'>
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className='link-button'>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
