import { useOutletContext } from 'react-router-dom';
import { OutletContext } from 'types/outletContext';

export const HostVanPhotos = () => {
  const { currentVan } = useOutletContext<OutletContext>();
  console.log(currentVan);
  return <img src={currentVan.imageUrl} className='host-van-detail-image' />;
};
