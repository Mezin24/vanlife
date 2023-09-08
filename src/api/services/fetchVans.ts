import axios from "axios";
import { Vans } from "types/vans";

export const fetchVans = async () => {
    const { data, request, statusText, status } = await axios.get<{ vans: Vans[] }>('/api/vans');
    if (!request ) {
      throw {
        message: 'Something went wrong while fetching vans',
        statusText,
        status 
      }
    }
   return data.vans
  
};