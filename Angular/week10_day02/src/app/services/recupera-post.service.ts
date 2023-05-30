import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecuperaPostService {

  constructor() { }

  // il SERVICE deve recuperare i post tramite fatch in assets/db.json
  recuperaPost = async () => {
    let promise = await fetch('assets/db.json');
        if (promise.ok) {
            return (await promise.json())
        } else {
            throw new Error('promise error')
        }
}

}
