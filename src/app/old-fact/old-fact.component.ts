import { Component } from '@angular/core';
import { FactsService } from '../facts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-old-fact',
  templateUrl: './old-fact.component.html',
  styleUrls: ['./old-fact.component.scss']
})
export class OldFactComponent {

  subscription: Subscription = new Subscription();

  fact: string = '';
  loading = false;

  oldFact: string = '';

  constructor(private factsService: FactsService) {}

  ngOnInit() {
    console.log('Fact B init')

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
      console.log('Response: ', response.fact)
      this.fact = response.fact
      this.factsService.setOldFact(this.fact)
      this.loading = false
    })
  }

}
