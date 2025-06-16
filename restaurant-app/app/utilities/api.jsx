import {PROXY_URL} from './apiConfig'

export async function fetchRestaurants() {
  const res = await fetch(`${PROXY_URL}/restaurants`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error("Failed to fetch restaurants");
  return res.json();
}

export async function fetchFilters() {
  const res = await fetch(`${PROXY_URL}/filter`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error("Failed to fetch filters");
  return res.json();
}