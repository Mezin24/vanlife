import { Vans } from 'types/vans';
import { Link } from 'react-router-dom';

interface VanItemProps {
  van: Vans;
}

export const VanItem = ({ van }: VanItemProps) => {
  return (
    <div className='van-tile'>
      <Link to={`/vans/${van.id}`}>
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
