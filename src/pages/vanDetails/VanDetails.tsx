import { fetchVans } from 'api/services/fetchVans';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  ActionFunctionArgs,
  Link,
  LoaderFunction,
  ParamParseKey,
  Params,
  useLoaderData,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Vans } from 'types/vans';

type VanDetailsParams = {
  id: string;
};

interface LocationState {
  search: string;
}

const Paths = {
  vanDetails: '/vens/:id',
} as const;

interface VanDetailsLoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.vanDetails>>;
}

export const loader: LoaderFunction = ({ params }: VanDetailsLoaderArgs) => {
  return fetchVans(params.id);
};

export const VanDetails = () => {
  const { id } = useParams<VanDetailsParams>();
  const location = useLocation();
  const search = (location.state as LocationState)?.search;
  const hasTypeFilter = search?.includes('type=');
  const van = useLoaderData() as Vans;

  if (!id) return null;

  return (
    <div className='van-detail-container'>
      <Link
        to={`..${search ? `?${search}` : ''}`}
        relative='path'
        className='back-button'
      >
        &larr; <span>Back to {hasTypeFilter ? van?.type : 'all'} vans</span>
      </Link>

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
    </div>
  );
};
