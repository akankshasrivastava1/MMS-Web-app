// import { Injectable } from '@angular/core';
// import {Movies} from 'src/app/movies';
// import {HttpClient,HttpHeaders} from '@angular/common/http';
// import {Observable, observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MoviesService {
//   url="https://localhost:44394/api/MMS";
//   constructor(private http:HttpClient) { }

//   DisplayAll()
//   {
//     return this.http.get("https://localhost:44394/api/MMS");
//   }

//   Search(Id:any)
//   {
//     return this.http.get(this.url+"/"+Id)
//   }

//   AddMov(mov:Movies):Observable<Movies>
//   {
//     let httpheaders=new HttpHeaders().set('Content-Type','application/json');
//     let options={headers:httpheaders}
//     return this.http.post<Movies>(this.url,mov,options);
//   }


//   DeleteMov(Id:string):Observable<number>{

//     let httpheaders=new HttpHeaders().set('Content-Type','application/json');
//     return this.http.delete<number>(this.url+"/"+Id);
//   }

//   UpdateMov(mov:Movies):Observable<Movies>
//   {
//     let httpheaders=new HttpHeaders().set('Content-Type','application/json');
//     let options={headers:httpheaders}
//     return this.http.put<Movies>(this.url,mov,options);
//   }

// }
