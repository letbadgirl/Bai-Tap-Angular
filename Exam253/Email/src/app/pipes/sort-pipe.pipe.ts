import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(users: any[], sortBy: string, sortValue: number): any {
    // console.log(sortBy,'-',sortValue)
    if (sortBy === 'id') {
      users.sort((a, b) => {
        if (a.id > b.id) {
          return sortValue;
        } else if (a.id < b.id) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    if (sortBy === 'firstName') {
      users.sort((a, b) => {
        if (a.firstName > b.firstName) {
          return sortValue;
        } else if (a.firstName < b.firstName) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    if (sortBy === 'lastName') {
      users.sort((a, b) => {
        if (a.lastName > b.lastName) {
          return sortValue;
        } else if (a.lastName < b.lastName) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    if (sortBy === 'email') {
      users.sort((a, b) => {
        if (a.email > b.email) {
          return sortValue;
        } else if (a.email < b.email) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    if (sortBy === 'gender') {
      users.sort((a, b) => {
        if (a.gender > b.gender) {
          return sortValue;
        } else if (a.gender < b.gender) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    if (sortBy === 'birthday') {
      users.sort((a, b) => {
        if (a.birthday > b.birthday) {
          return sortValue;
        } else if (a.birthday < b.birthday) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    if (sortBy === 'salary') {
      users.sort((a, b) => {
        if (a.salary > b.salary) {
          return sortValue;
        } else if (a.salary < b.salary) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    if (sortBy === 'phone') {
      users.sort((a, b) => {
        if (a.phone > b.phone) {
          return sortValue;
        } else if (a.phone < b.phone) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    }
    return users;
  }

}
