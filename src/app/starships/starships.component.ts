import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from './services/api-requests.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  constructor(private apiRequests: ApiRequestsService) { 
  }
  ngOnInit(): void {
  }

}
