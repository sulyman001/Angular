import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  studentsList : Student[] = [];
  id : string = '';
  first_name : string = '';
  last_name : string = '';
  email : string = '';
  mobile : string = '';

  constructor(private auth : AuthService, private data : DataService) { }

  register(){
    this.auth.logout();
  }

  getAllStudents() {
    this.data.getAllStudents().subscribe(res => {

      this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })
  }

  addStudent() {

  }

  updateStudent() {

  }

  deleteStudent(student : Student){
    if(window.confirm('Are you sure you want to delete'+student.first_name+''+student.last_name+'')){
      this.data.deleteStudent(student);
    }
  }
}
