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

export async function fetchOpenStatus(restaurantId) {
    const res = await fetch(`${PROXY_URL}/open/${restaurantId}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error("Failed to fetch open status");
    const data = await res.json();
    return data.is_open;
}

export async function fetchFilterId(filter_id) {
    const res = await fetch(`${PROXY_URL}/filter/${filter_id}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error("Failed to fetch open status");
    const data = await res.json();
    return data;
}