import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: []
})
export class UserSearchComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();

  public name = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    const name = this.name;
    this.name = '';
    this.onSubmit.emit(name);
  }

}
