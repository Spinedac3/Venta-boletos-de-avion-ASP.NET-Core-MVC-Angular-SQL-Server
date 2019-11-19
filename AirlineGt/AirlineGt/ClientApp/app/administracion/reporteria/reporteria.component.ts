import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { Body } from '../../shared/body';

@Component({
  selector: 'app-reporteria',
  templateUrl: './reporteria.component.html',
  styleUrls: ['./reporteria.component.css']
})
export class ReporteriaComponent implements OnInit {
  data: any;
  data2: any;
  data3: any;

    constructor(private dataService: DataService) { }
    body: Body = new Body();
  ngOnInit() {
      this.data = {
            labels: ['Guatema', 'Salvador', "Honduras", "Panama", "Nicaragua", "España"],
            datasets: [
                {
                    label: 'Boletos Comprados',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65,23,24,12,45,55]
                }
            ]
        }
        this.data2 = {
          labels: ['Guatema', 'Salvador', "Honduras", "Panama", "Nicaragua", "España"],
          datasets: [
              {
                  label: 'Boletos Comprados',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: [23,55,13,45,44,13]
              }
          ]
      }
      this.data3 = {
        labels: ['Guatema', 'Salvador', "Honduras", "Panama", "Nicaragua", "España"],
        datasets: [
            {
                label: 'Boletos Comprados',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [43,21,24,55,42,11]
            }
        ]
      }
      this.body.atributo1 = "page ready: Reporteria";
      this.dataService.pageReady(this.body).subscribe(success => {
          if (success) {
              console.log("Page ready funciono");
          }

      }, err => console.log("Page Ready no funciono"));
  }

}
