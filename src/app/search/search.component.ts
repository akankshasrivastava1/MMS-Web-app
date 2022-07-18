import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies/movies';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listmovie:any;
  obj:any;
  id2:any;
  flag:any;
  list:any;

  constructor(private api : ApiService) { 
    this.flag="list";
  }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.api.DisplayAll().subscribe(
      data=>{
      this.listmovie=data;
     }
   );
  }
  sec_here()
  {
    this.flag="sear";
  }
    SearchMov(id:any){
      this.api.Search(id).subscribe(
        data=>{
         this.obj=data;
        }
      );
    }

}
    