import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as MyLegend from 'chartist-plugin-legend';
import { CommonService } from '../../_services/common.service';
import { TableData } from '../commons/tables/md-table/md-table.component';
import { ToastrService } from 'ngx-toastr';
// import { KeycloakService } from '../../keycloak.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { AuthenticationService } from '../../_services/authentication.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails: KeycloakProfile;
  userRoles: string[];
  token: string;
  isApprover: boolean= false;

  constructor(private commonService: CommonService, private toastr: ToastrService, 
    protected keycloakAngular: KeycloakService, private authService: AuthenticationService) {
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
    //console.log(sum);
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
        low: 0,
        high: 100,
      },
      distributeSeries: true,
      height: '325px',
      chartPadding: { bottom: 5 },
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

    // start animation for the bar Chart
    this.startAnimationForBarChart(simpleBarChart);
  }

  async ngOnInit() {
    if (await this.keycloakAngular.isLoggedIn()) {
      this.userDetails = await this.keycloakAngular.loadUserProfile();
      console.log('User Details: ' + JSON.stringify(this.userDetails));
      this.userRoles = await this.keycloakAngular.getUserRoles();
      console.log('User Roles: ' + this.userRoles);
      let org = await this.authService.getUserGroups(); 
      console.log('User Organization Details: ' + JSON.stringify(org));
      //console.log('Is Approver:'+ await this.authService.isApprover()); 
      this.isApprover = await this.authService.isApprover();     
    }else{
      return; //return to login page
    }

    this.commonService.getAccounts().subscribe(
      data => {
        this.accounts = data;
        //console.log('Inside');
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
        //example toaster message
        this.toastr.info('You have 2 new messages!', 'Messages', {
          timeOut: 3000,
          progressBar: true
        });
        this.toastr.success('', 'Hello ' + this.userDetails.username + ', welcome to your dashboard!', {
          timeOut: 3000,
          progressBar: true
        });

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

    //start animation for the bar Chart
    this.startAnimationForBarChart(websiteViewsChart);


  }

}
