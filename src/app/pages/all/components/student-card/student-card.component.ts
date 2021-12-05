import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../../../models/student.model";

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  @Input() student!: Student;

  constructor() {
  }

  ngOnInit(): void {
  }

}
