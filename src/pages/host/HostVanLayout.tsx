import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { Vans } from 'types/vans';
import { linkStyles } from 'utils/helpers/linkStyles';

export const HostVanLayout = () => {
  const { id } = useParams<{ id: string }>();
  const [currentVan, setCurrentVan] = useState<Vans | null>(null);

  useEffect(() => {
    const fetchCurrentVan = async () => {
      try {
        const { data } = await axios.get<{ vans: Vans }>(
          `/api/host/vans/${id}`
        );
        setCurrentVan(data.vans);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrentVan();
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section>
        <Link to='..' relative='path' className='back-button'>
          &larr; <span>Back to all vans</span>
        </Link>

        <div className='host-van-detail-layout-container'>
          <div className='host-van-detail'>
            <img src={currentVan.imageUrl} />
            <div className='host-van-detail-info-text'>
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>
          <nav className='host-van-detail-nav'>
            <NavLink style={linkStyles} to={`.`} end>
              Details
            </NavLink>
            <NavLink style={linkStyles} to={`pricing`}>
              Pricing
            </NavLink>
            <NavLink style={linkStyles} to={`photos`}>
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      </section>
    </>
  );
};
