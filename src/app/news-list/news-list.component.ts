import { Component, OnInit } from '@angular/core';
import { newslist } from '../newslist';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newslist:any[];
  constructor() { }

  options:any[]=[
    {name:"Jonathan",value:'1'},
    {name:"Kathy",value:'2'},
    {name:"Mary",value:'3'}
  ]
  ngOnInit() {
    this.intialData();
  }

  intialData(){
      this.newslist = new newslist().newslist.filter(opt => opt.Status!='Verify');
  }
  onApprove(data){
    console.log(data.ST001,"Assign");
    let altered = new newslist().newslist.map((item, i) => {
      console.log('iten - > ', item.Story_id);
      if(item.status != 'Verify'){
        if(item.Story_id == "ST001"){
          console.log('inside if');
          item["Assigned_to"] = data.ST001;
          item["Status"] = "In Progress";
          item["Result"] = "Awaited";
        }
      }
      return item;
    });
    this.newslist = altered.filter(opt => opt.Status!='Verify');
    console.log('new - > ', this.newslist);
  }
}
