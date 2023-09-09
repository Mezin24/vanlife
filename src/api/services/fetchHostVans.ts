import axios from 'axios';
import { Vans } from 'types/vans';

export const fetchHostVans = async (id?: string) => {
  const { data } = await axios.get<{ vans: Vans[] }>(
    id ? `/api/host/vans/${id}` : '/api/host/vans'
  );
  return data;
};
