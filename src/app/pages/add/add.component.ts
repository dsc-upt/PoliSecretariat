import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  students: Array<Student> = [{
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
      firstName: "Name First",
      lastName: "Name Last",
      dob: new Date(1999, 4, 12),
      faculty: "AC",
      specialization: "Informatics",
      email: "first@mail.com",
      phoneNumber: 40743123312,
    },
  ];

  studentsForm = this.fb.group({
    id: [null, Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: [null, Validators.required],
    faculty: ['', Validators.required],
    specialization: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: [null, Validators.required],
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  add() {
    console.log(this.studentsForm.value)
    const student: Student = this.studentsForm.value;
    this.students.push(student);
    console.log(this.students);
  }
}
