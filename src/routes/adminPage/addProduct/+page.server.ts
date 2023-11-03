import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';
import fs from 'fs/promises'
import path from 'path'

export const load: PageServerLoad = ( event ) => {

}

export const actions: Actions = {
    addProduct: async ({ request, cookies }) => {
        const sessionId = cookies.get('fastapiusersauth');
        console.log("sesstion cookie", sessionId);
        const rawData = Object.fromEntries(await request.formData());
        const randomUUID = crypto.randomUUID();
        const filePath = path.join(
            process.cwd(),
            'static',
            'productImages',
            `${randomUUID}.${(rawData.productImage as Blob).type.split('/')[1]}`
        )
        await fs.writeFile(filePath, Buffer.from(await (rawData.productImage as Blob).arrayBuffer()))

        // Transform required fields to integers
        const productData = {
            name: rawData.name,
            description: rawData.description,
            price: parseInt(rawData.price as string, 10),
            quantity: parseInt(rawData.quantity as string, 10),
            category_id: parseInt(rawData.category_id as string, 10),
            image: `/productImages/${randomUUID}.${(rawData.productImage as Blob).type.split('/')[1]}`,
        };
        try {
            const response = await fetch('http://localhost:9999/api/product/', {
                method: 'POST',
                body: JSON.stringify(productData),
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `fastapiusersauth=${sessionId};`
                },
            });
            // console.log(response);
            if (response.ok) {

                console.log('Product added successfully');
                throw redirect(308, '/'); // Redirect to some success page or product listing
            } else {
                // console.log(response);
                console.error('Failed to add product');
                throw new Error('Failed to add product');
            }
        } catch (error) {
            console.error('Error occurred while adding product:', error);
        }
        throw redirect(307, '/'); // Fallback redirect
    }
};
