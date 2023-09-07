import { useOutletContext } from 'react-router-dom';
import { OutletContext } from 'types/outletContext';

export const HostVanPricing = () => {
  const { currentVan } = useOutletContext<OutletContext>();
  console.log(currentVan);
  return (
    <h3 className='host-van-price'>
      ${currentVan.price}
      <span>/day</span>
    </h3>
  );
};
