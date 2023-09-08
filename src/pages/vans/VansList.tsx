import { fetchVans } from 'api/services/fetchVans';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { Vans } from 'types/vans';
import { VanItem } from './VanItem';

export const loader = () => fetchVans()

export const VansList = () => {
  const vans = useLoaderData() as Vans[]
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const typeBadges = [...new Set(vans.map((van) => van.type))].map((type) => (
    <button
      className={`van-type ${type} ${typeFilter === type ? 'selected' : null}`}
      onClick={() => setSearchParams(type === 'clear' ? '' : { type })}
      key={type}
    >
      {type}
    </button>
  ));

  if (typeFilter) {
    typeBadges.push(
      <button key='clear' className='van-type' onClick={() => setSearchParams('')}>
        clear filter
      </button>
    );
  }


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
