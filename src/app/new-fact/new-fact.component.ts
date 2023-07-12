import { Component } from '@angular/core';
import { FactsService } from '../facts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-fact',
  templateUrl: './new-fact.component.html',
  styleUrls: ['./new-fact.component.scss']
})
export class NewFactComponent {
  
  fact: string = '';
  loading = false;
  
  oldFact: string = '';

  constructor(private factsService: FactsService) {}

  ngOnInit() {

    this.oldFact = this.factsService.getOldFact()

    if (this.oldFact.length === 0 ) {
      this.onGetNewFact()
    } else {
      this.fact = this.oldFact
    }

  }

  onGetNewFact() {
    this.loading = true

    this.factsService.getNewFact().subscribe(response => {
      this.fact = response.fact
      this.factsService.setOldFact(this.fact)
      this.loading = false
    })
  }

}
