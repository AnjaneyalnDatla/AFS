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
  accountData: any[] = [];
  accountList: any[] = [];
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
    arrs.map((arr) => {
      const percentage = (arr[2] / sum * 100).toFixed(2);
      arr.push(percentage + '%');
      this.seriesData.push(percentage);
    });
    console.log(sum);
  }

  drawBarChart() {
    const dataSimpleBarChart = {
      labels: this.labelData,
      series: this.seriesData
    };

    const optionsSimpleBarChart = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      axisY: {
        labelOffset: {
          x: 0,
          y: 0
        },
        type: Chartist.FixedScaleAxis,
        ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        low: 0
      },
      distributeSeries: true
    };

    const responsiveOptionsSimpleBarChart: any = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value: any) {
            return value[0];
          }
        }
      }]
    ];

    const simpleBarChart = new Chartist.Bar('#simpleBarChart', dataSimpleBarChart, optionsSimpleBarChart);

    // start animation for the Emails Subscription Chart
    //this.startAnimationForBarChart(simpleBarChart);
  }

  ngOnInit() {

    this.commonService.getAccounts().subscribe(
      data => {
        this.accounts = data;
        console.log('Inside');
        let i = 0;
        this.accounts.forEach(account => {

          this.labelData.push(account['name']);//bar chart label data

          this.accountData = [];
          i++;
          this.accountData.push(i);
          this.accountData.push(account['name']);
          this.accountData.push(account['currentBalance']);
          this.accountList.push(this.accountData);
        })
        this.calulatePercentage(this.accountList);
        this.tableData = {
          headerRow: [],
          dataRows: this.accountList
        };
        this.drawBarChart();
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
