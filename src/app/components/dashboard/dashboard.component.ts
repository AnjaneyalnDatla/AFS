import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as MyLegend from 'chartist-plugin-legend';
import { CommonService } from '../../_services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private commonService: CommonService,) { 
    var tester = new MyLegend(); //without this line, you get 'Chartist.plugins undefined'
  }

  //declarations
  accounts: any[] = [];
  seriesData: any[] = [];
  labelData: any[] = [];
  
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  

  buildPieChart(){
      /*  **************** Pie Chart ******************** */

      console.log('outside' +JSON.stringify(this.accounts))
    //   this.accounts.forEach((obj, index) => {
    //     this.seriesData.push(obj['currentBalance']);
    //     this.labelData.push(obj['name']);
    //     console.log('before transform, this : ' + this);
    // });
  

      this.accounts.forEach(account => {
        this.seriesData.push(account['currentBalance']);
        this.labelData.push(account['name']);
      })

      const currentBalances = [45478,29700,1588,24081]
      const data = {
        series: this.seriesData
      };
      const options = {
        height: 200,
        distributeSeries: true,
        labelInterpolationFnc: function (value) {
          function getSum(total, num) { return total + num; }
          return Math.round(value / data.series.reduce(getSum) * 100) + '%';
        },
        colors:["#f00","#f0f","#00f","#0f0"],
        plugins: [Chartist.plugins.legend({
          legendNames: this.labelData,
          clickable: false,})]
      };
    
       new Chartist.Pie('.ct-chart-pie', data, options);
  }

  ngOnInit() {
    this.commonService.getAccounts().subscribe(
      data => {
        this.accounts = data;
        console.log('Inside')
        this.buildPieChart();
      }
    );
    // console.log('outside')

     


      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);

      
  }

  //Private methods

   getAccounts() {//load on init
    this.commonService.getAccounts().map(
      data => {
        this.accounts = data;
      }
    );
    
  }

}
