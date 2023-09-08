import axios from 'axios';
import { useEffect, useState } from 'react';
import { Vans } from 'types/vans';
import { VanItem } from './VanItem';
import { useSearchParams } from 'react-router-dom';

export const VansList = () => {
  const [vans, setVans] = useState<Vans[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const typeBadges = [...new Set(vans.map((van) => van.type))].map((type) => (
    <button
      className={`van-type ${type} ${typeFilter === type ? 'selected' : null}`}
      onClick={() => setSearchParams(type === 'clear' ? '' : { type })}
    >
      {type}
    </button>
  ));

  if (typeFilter) {
    typeBadges.push(
      <button className='van-type' onClick={() => setSearchParams('')}>
        clear filter
      </button>
    );
  }

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

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list-filter-buttons'>{typeBadges}</div>
      <div className='van-list'>
        {displayedVans.map((van) => (
          <VanItem
            key={van.id}
            van={van}
            searchFilter={searchParams.toString()}
          />
        ))}
      </div>
    </div>
  );
};
