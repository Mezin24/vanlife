import { Vans } from 'types/vans';
import { Link } from 'react-router-dom';

interface VanItemProps {
  van: Vans;
  searchFilter?: string;
}

export const VanItem = ({ van, searchFilter }: VanItemProps) => {
  console.log(searchFilter);
  return (
    <div className='van-tile'>
      <Link to={van.id} state={{ search: searchFilter }}>
        <img src={van.imageUrl} />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  );
};
