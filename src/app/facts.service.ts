import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FactsService {

    BASE_URL = 'https://catfact.ninja/fact'

    constructor(private http: HttpClient) {}

    newFact: string = '';
    oldFact: string = '';

    getNewFact() {

        return this.http.get<{fact: string}>(this.BASE_URL)

    }

    getOldFact() {
        return this.oldFact
    }

    setOldFact(fact: string) {
        this.oldFact = fact
    }

}