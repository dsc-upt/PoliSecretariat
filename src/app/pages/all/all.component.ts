import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  students: Array<Student> = [
    {
      id: 0,
      firstName: "First Name",
      lastName: "Last Name",
      dob: new Date(2000, 11, 17),
      faculty: "AC",
      specialization: "Computer Science",
      email: "name@mail.com",
      phoneNumber: 40765899652,
    },
    {
      id: 1,
      firstName: "nume",
      lastName: "Name Last",
      dob: new Date(1999, 4, 12),
      faculty: "AC",
      specialization: "Informatics",
      email: "first@mail.com",
      phoneNumber: 40743123312,
    },
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
