import { Component, OnInit } from '@angular/core';
import { NewsStatusService } from '../news-status.service';

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.css']
})
export class AgentViewComponent implements OnInit {

  constructor(private newsStatusService:NewsStatusService) { }
  status = "";

  newslist:any[]=[
  {Story_id:'ST001',title:'10-year-old shot for plucking mangoes in Bihar',text:'10-year-old shot for plucking mangoes in Bihar. This content is a little bit longer.',smalltext:'Last updated 3 mins ago',status:''},
  {Story_id:'ST002',title:'MP should realise people are watching,will decide at election time',text:'MP should realise people are watching,will decide at election time. This content is a little bit longer',smalltext:'Last updated 3 mins ago',status:''},
  {Story_id:'ST013',title:'PM Modi to launch number of projects.',text:'PM Modi to launch number of projects as a natural lead-in to additional content. This content is a little bit longer',smalltext:'Last updated 3 mins ago',status:''}
  ];
  buttonoptions:any[]=[
    {Story_id:'ST001',type:'btn btn-success',value:'True'},
    {Story_id:'ST002',type:'btn btn-warning',value:'Partial fake'},
    {Story_id:'ST003',type:'btn btn-danger',value:'Completely fake'}
  ];

  ngOnInit() {
  }
  onApprove(data){
    console.log(data,"clicked")
  // this.newslist.filter(opt=> opt.Story_id!="ST001") ;
  }
  trueClick(){
    console.log(" Status : True verified");
    this.status = "true";
    this.newsStatusService.postStatus(this.status);
  }
  partialFake(){
    this.status = "Patially fake";
    this.newsStatusService.postStatus(this.status);
    //alert(" Status : Partially fake verified");
  }
  fakeClick(){
    this.status = "Completely fake";
    this.newsStatusService.postStatus(this.status);
  //  alert(" Status : Completely fake verified");
  }
}
