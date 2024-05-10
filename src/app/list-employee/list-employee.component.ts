import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit {
  people: Personne[];
  constructor(private http: HttpClient) { }

  
  ngOnInit(): void {
    this.http.get<Personne[]>('http://localhost:8080/api/personnes/all').subscribe(data => {
      this.people = data.sort((a, b) => a.lastName.localeCompare(b.lastName));
    });
}
}
