import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export class Search {

  public value: string = null;
  private terms = new Subject<string>();

  // subscribe(callback: (() => void)){
  //   this.terms
  //       .debounceTime(300)
  //       .distinctUntilChanged()
  //       .subscribe((term) => {
  //         this.value = term;
  //         callback();
  //       });
  // }
  subscribe(callback: (() => void)){
    this.terms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((term) => {
      this.value = term;
      callback();
    });
  }

  next(term: string) {
    this.terms.next(term);
  }

  destroy() {
    this.terms.unsubscribe();
  }
}
