import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as MyLegend from 'chartist-plugin-legend';
import { CommonService } from '../../_services/common.service';
import { TableData } from '../commons/tables/md-table/md-table.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private commonService: CommonService, ) {
    var tester = new MyLegend(); //without this line, you get 'Chartist.plugins undefined'
  }

  //declarations
  accounts: any[] = [];
  seriesData: any[] = [];
  labelData: any[] = [];
  public tableData: TableData;


  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
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

  calulatePercentage(arrs) {

    const sum = arrs.reduce((acc, arr) => acc + arr[2], 0);

    arrs.map(function (arr) {
      console.log((arr[2] / sum * 100).toFixed(2));
      arr.push((arr[2] / sum * 100).toFixed(2) + '%');
    });
    console.log(sum);
  }

  ngOnInit() {

    this.commonService.getAccounts().subscribe(
      data => {
        this.accounts = data;
        console.log('Inside');
        let i = 0;
        this.accounts.forEach(account => {
          this.seriesData = [];
          i++;
          this.seriesData.push(i);
          this.seriesData.push(account['name']);
          this.seriesData.push(account['currentBalance']);
          this.labelData.push(this.seriesData);
        })
        this.calulatePercentage(this.labelData);
        this.tableData = {
          headerRow: [],
          dataRows: this.labelData
        };
      }
    );


    var datawebsiteViewsChart = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 443, 320, 780, 553, 453],
        [542, 443, 320, 780, 553, 453]
      ]
    };

    var optionswebsiteViewsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },

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

}
