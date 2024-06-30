import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  chart1 = new Chart({
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'First',
            y: 61.41,
            sliced: true,
            color: '#71C0F5'
            },
            {
              name: 'Second',
              y: 9.41,
              sliced: true,
              color: '#07B612'
              },
              {
                name: 'Third',
                y: 1,
                sliced: true,
                color: '#460541'
                },
                {
                  name: 'Fourth',
                  y: 4.41,
                  sliced: true,
                  color: '#F3F308'
                  },
              

          ]
        
      }
    ]
    
  });

  chart2 = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Monthly Average Rainfall'
    },
    series: [
      {
        name: 'Rainfall',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      } as any
    ]
      
   
    
  })

}
