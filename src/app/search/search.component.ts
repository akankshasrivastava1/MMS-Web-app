import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies/movies';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
    
  }
  // moviesData:any;
  // public obj = new Movies();
  // id2:any;
  // flag:any;
  // list:any;

  // constructor(private api:ApiService) { 
  //   this.flag="list";
  // }

  // ngOnInit(): void {
  //   this.getdata();
  // }
  // getdata(){
  //   this.api.GetMovies().subscribe(
  //     data=>{
  //     this.moviesData=data;
  //    }
  //  );
  // }

  // sec_here()
  // {
  //   this.flag="sear";
  // }

  // SearchMov(name:any){
  //   this.api.Search(name).subscribe(
  //       data=>{
  //        this.obj=data;
  //       }
  //     );
  //   }

}
    