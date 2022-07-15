import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
// import { MoviesService } from '../movies.service';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Movies } from './movies';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  flag:any;
  data : any;
  status1:any;
  obj:any;
  formValue !: FormGroup;
  moviesData !: any;
  moviesObj : Movies = new Movies();
  showAdd !: boolean;
  showUpdate !: boolean;
  @Input() receive !: string;
  @Input() Specification !: any;
  role:string =""
  constructor( private api: ApiService,
    private formBuilder: FormBuilder) {

     }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      title: [''],
      genre: [''],
      leadActor: [''],
      language:[''],
      rating: [''],
      releaseYear: [''],
    })
    this.getMoviesDetails();
    this.role = localStorage.getItem('userType')!
  }

  search_movies()
  {
    this.flag="Search";
  }

  backToRecords()
  {
    this.flag="Allrecords";
  }

  clickAddMovies(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postMoviesDetails() {
    this.moviesObj.Id = this.formValue.value.id;
    this.moviesObj.Title = this.formValue.value.title;
     this.moviesObj.Genre = this.formValue.value.genre;
     this.moviesObj.LeadActor = this.formValue.value.leadActor;
     this.moviesObj.Language = this.formValue.value.language;
     this.moviesObj.Rating = this.formValue.value.rating;
     this.moviesObj.ReleaseYear = this.formValue.value.releaseYear;
    this.api.PostMovies(this.moviesObj)
      .subscribe(res => {
        console.log(res);
        alert("Added Successfully")
        let ref = document.getElementById('close');
      ref?.click();
      this.getMoviesDetails();
      })
  }
  getMoviesDetails() {
    this.api.GetMovies()
    .subscribe(res=>{
      this.moviesData = res.moviesDetails;
      
    })
  }
  editMoviesDetail(){
    //this.moviesObj.Id = this.formValue.value.id;
    this.moviesObj.Title = this.formValue.value.title;
    this.moviesObj.Genre = this.formValue.value.genre;
    this.moviesObj.LeadActor = this.formValue.value.leadActor;
    this.moviesObj.Language = this.formValue.value.language;
    this.moviesObj.Rating = this.formValue.value.rating;
    this.moviesObj.ReleaseYear = this.formValue.value.releaseYear;
    this.api.UpdateMovies(this.moviesObj)
    .subscribe(res=>{
      alert("Updated Successfully")
      let ref = document.getElementById('close');
      ref?.click();
      this.getMoviesDetails();
    })
  }
  onEdit(row : any){
   this.moviesObj.Id = row.id;
    //this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['genre'].setValue(row.genre);
    this.formValue.controls['leadActor'].setValue(row.leadActor);
    this.formValue.controls['language'].setValue(row.language);
    this.formValue.controls['rating'].setValue(row.rating);
    this.formValue.controls['releaseYear'].setValue(row.releaseYear);
    this.showUpdate = true;
    this.showAdd = false;
  }

  SearchMov(row: any)
   { 
    this.api.Search(row.title)
    .subscribe(res=>{
        this.data=res;
        console.log(this.data);
    })  
  }
    
  deleteMoviesDetail(row : any){
   let clickedYes = confirm("Are you sure want to delete");
   if(clickedYes){
    this.api.DeleteMovies(row.title)
    .subscribe(res=>{
      alert("Deleted Successfully");
      this.getMoviesDetails();
    })
   }
    
  }
  getdata(){
    this.api.GetMovies().subscribe(
      data=>{
      this.moviesData=data;
     }
   );
  }

}
