import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedSection: string = '';  // Holds the currently selected section

  // Function to set the selected section based on the click event
  showContent(section: string) {
    this.selectedSection = section;
  }
}
