import {NextFunction, Request, Response} from "express";
import axios from 'axios';

export class BeersController {
    async beers(request: Request, response: Response, next: NextFunction) {
        const params: any = {...request.body, ...request.params, ...request.query};
        return new Promise((resolve, reject) => {
            axios.get(`https://api.punkapi.com/v2/beers?per_page=80&page=${params.page || 1}`).then((res) => {
                resolve(res.data)
            }).catch((e) => {
                reject(e)
            })
        });
    }
}
