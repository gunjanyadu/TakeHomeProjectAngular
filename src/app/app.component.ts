// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent implements OnInit {
  data: any[] = [];
 searchTerm: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getAllData().subscribe((response) => {
      this.data = response;
    });
  }
  sortByColumn(column: string) {
      this.data = this.data.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        return this.sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });

      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    }

    downloadCSV() {
        const csvContent = 'data:text/csv;charset=utf-8,' +
          Object.keys(this.data[0]).join(',') + '\n' +
          this.data.map(row => Object.values(row).join(',')).join('\n');

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'normalized_data.csv');
        document.body.appendChild(link);
        link.click();
      }
  getSong() {
     this.dataService.getSongByTitle(this.searchTerm).subscribe(
       (response) => {
         if (response) {
           this.data = [response];
         } else {
           console.log('Song not found');
         }
       },
       (error) => {
         console.error('Error fetching song:', error);
       }
     );
   }
}
