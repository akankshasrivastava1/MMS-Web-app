import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  public loginAPIUrl : string = "https://localhost:44394/api/Login/";
  public moviesAPIUrl : string = "https://localhost:44394/api/Movies/";
  constructor(private _http : HttpClient) { }

  // DisplayAll(){
  //   return this._http.get("https://localhost:44394/api/Movies");
  // }

  PostMovies(data : any){
    return this._http.post<any>(`${this.moviesAPIUrl}add_movies`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  DeleteMovies(id : number){
    return this._http.delete<any>(`${this.moviesAPIUrl}delete_movies/`+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  UpdateMovies(data : any){
    return this._http.put<any>(`${this.moviesAPIUrl}update_movies`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  GetMovies(){
    return this._http.get<any>(`${this.moviesAPIUrl}get_all_movies`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  signUp(movObj:any){
    //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
    return this._http.post<any>(`${this.loginAPIUrl}signup`,movObj)
  }
  login(movObj:any){
    return this._http.post<any>(`${this.loginAPIUrl}login`,movObj)
  }

  // searchMovieByTitle(title: string) {
  //   const url = 'https://www.omdbapi.com/?t=' + title + '&apikey=e6e8b21a';
  //   return this._http.get(url);
  // }
}
