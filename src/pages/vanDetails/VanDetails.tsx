import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Vans } from 'types/vans';

type VanDetailsParams = {
  id: string;
};

export const VanDetails = () => {
  const { id } = useParams<VanDetailsParams>();
  const [van, setVan] = useState<Vans | null>(null);

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
