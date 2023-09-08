import axios from "axios";
import { Vans } from "types/vans";

export const fetchVans = async () => {
    const { data, request } = await axios.get<{ vans: Vans[] }>('/api/vans');
    if (!request ) {
      throw 'Something went wrong while fetching vans'
    }
   return data.vans
  
};