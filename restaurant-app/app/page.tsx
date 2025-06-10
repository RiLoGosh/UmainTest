// app/restaurants/page.jsx
import { PROXY_URL } from './apiConfig';
import RestaurantList from './components/restaurantList';
import Sidebar from './components/sidebarFilter';
import OverheadBar from './components/overheadBar';

export default async function RestaurantsPage() {
  let res = await fetch(PROXY_URL + "/restaurants", {
    cache: 'no-store' // or 'force-cache' or 'revalidate: 60' if needed
  });

  const data = await res.json();

  res = await fetch(PROXY_URL + "/filter", {
    cache: 'no-store' // or 'force-cache' or 'revalidate: 60' if needed
  });

  const filterData = await res.json();


  return (
    <div className="flex">
      <Sidebar />
      <main className='flex-1 md:ml-64 p-8'>
        <OverheadBar filters={filterData.filters}/>
        <div className='flex overflow-y-scroll space-x-2 pb-2'>
          <RestaurantList restaurants={data.restaurants} />
        </div>
        
      </main>
      
      
      </div>
    
  )
}





