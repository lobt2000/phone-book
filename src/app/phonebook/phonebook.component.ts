import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPhone } from '../interfaces/phone.interface';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss'],

})

export class PhonebookComponent implements OnInit {
  @Output() color: EventEmitter<string> = new EventEmitter<string>();
  books: Array<IPhone> = [{
    fname: 'Petya',
    sname: 'Zhuk',
    number: '0631111111'
  },
  {
    fname: 'Petro',
    sname: 'Petriv',
    number: '0631222222'
  },
  {
    fname: 'Alejandro',
    sname: 'Del Rio Albrechet',
    number: '0633333333'
  },
  {
    fname: 'Vasylyna',
    sname: 'Vrublevska',
    number: '0635555555'
  },
  {
    fname: 'Ira',
    sname: 'Tytar',
    number: '0636666666'
  },
  {
    fname: 'Sofia',
    sname: 'Zhuk',
    number: '0977777777'
  },]
  searchName = '';
  changeI = null;
  hide = false;
  fname = '';
  sname = '';
  number = '';
  ischeck = true
  ischeck1 = true
  ischeck2 = true
  change: string;
  modalRef: BsModalRef;
  clearCross = false;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 
  sort(field?: string) {
    if (field) {
      this.change = field;
      this.books.sort(this.byField(field));
      this.ischeck = false;
    }
    else {
      this.books.reverse();
      this.ischeck = true;
      this.change = this.change;

    }
  }
  sort1(field?: string) {
    if (field) {
      this.books.sort(this.byField(field));
      this.ischeck1 = false;
      this.change = field;
    }
    else {
      this.books.reverse();
      this.ischeck1 = true;
      this.change = this.change;
    }
  }
  sort2(field?: string) {
    if (field) {
      this.books.sort(this.byField(field));
      this.ischeck2 = false;
      this.change = field;
    }
    else {
      this.books.reverse();
      this.ischeck2 = true;
      this.change = this.change;
    }
  }
  close(): void {
    // this.color.emit('white');
    // this.hide = false;
    this.clear()
    this.clearCross = false
  }
  save(): void {
    
    if (this.changeI === null) {
      if (this.fname.length !== 0 && this.sname.length !== 0 && this.number.length !== 0) {
        const newPhone = {
          fname: this.fname,
          sname: this.sname,
          number: this.number
          // this.color.emit('white');
        }
        this.books.push(newPhone)
        this.clear()
        // this.hide = false;
      }
    }
    else {
      this.books[this.changeI].fname = this.fname;
      this.books[this.changeI].sname = this.sname;
      this.books[this.changeI].number = this.number;
          // this.color.emit('white');
      this.changeI = null;
      // this.hide = false
      this.clear()
    }
  }
  cross(){
    if(this.searchName.length == 0){
      this.clearCross = false
    }
    else{
      this.clearCross = true
    }
  }
  addPhone(): void {
    // this.color.emit('lightgray');
    // this.hide = true;
  }
  del(index: number): void {
    this.books.splice(index, 1);
  }
  edit(index: number): void {
    // this.color.emit('lightgray');
    this.fname = this.books[index].fname;
    this.sname = this.books[index].sname;
    this.number = this.books[index].number;
    // this.hide = true;
    this.changeI = index;
  }
  clear(): void {
    this.fname = '';
    this.sname = '';
    this.number = '';
    this.searchName = '';
  }
  byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
}
