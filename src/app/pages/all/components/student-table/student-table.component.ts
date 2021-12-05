import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../../../models/student.model";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  @Input() students!: Array<Student>;

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'dob',
    'faculty',
    'specialization',
    'email',
    'phoneNumber'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
