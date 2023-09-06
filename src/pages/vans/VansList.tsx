import axios from 'axios';
import { useEffect, useState } from 'react';
import { Vans } from 'types/vans';
import { VanItem } from './VanItem';

export const VansList = () => {
  const [vans, setVans] = useState<Vans[]>([]);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const { data } = await axios.get<{ vans: Vans[] }>('/api/vans');
        setVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVans();
  }, []);

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list'>
        {vans.map((van) => (
          <VanItem key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
};
