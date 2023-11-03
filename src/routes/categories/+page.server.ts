/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch }) {
    const res = await fetch('http://localhost:9999/api/product/', {
        method: 'GET'
    });
    const data = await res.json();
    const categoty_res = await fetch('http://localhost:9999/api/category/', {
        method: 'GET'
    });
    const categoty_data = await categoty_res.json();

    return {
        props: {
            data: data,
            categoty_res: categoty_data
        }
        
    };
}

