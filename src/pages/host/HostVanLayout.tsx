import { fetchHostVans } from 'api/services/fetchHostVans';
import {
  ActionFunctionArgs,
  Link,
  LoaderFunction,
  NavLink,
  Outlet,
  ParamParseKey,
  Params,
  useLoaderData,
} from 'react-router-dom';
import { Vans } from 'types/vans';
import { linkStyles } from 'utils/helpers/linkStyles';
import { requireAuth } from 'utils/helpers/requireAuth';

const Paths = {
  vanDetails: '/host/vans/:id',
} as const;

interface HostVansLoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.vanDetails>>;
}

export const loader: LoaderFunction = async ({
  params,
}: HostVansLoaderArgs) => {
  await requireAuth();
  return fetchHostVans(params.id);
};

export const HostVanLayout = () => {
  const { vans: currentVan } = useLoaderData() as { vans: Vans };

  if (!currentVan) {
    return <h1>No vans found</h1>;
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
