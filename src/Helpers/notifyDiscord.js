import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const http= axios.create({
    baseURL: process.env.BASE_URL,
    headers: { 'Content-Type': 'application/json' }

})

export async function notifyDiscord(data) {
    if(process.env.DEBUG) {
        let {content, title, description} = data;

        console.log({webhook: process.env.WEBHOOK, baseURL: process.env.BASE_URL})
        let embeds = [{title, description}]

        let response = await http.post(process.env.WEBHOOK, {
            content,
            embeds
        })

        return response;
    } else {
        return
    }
}
