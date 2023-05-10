import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  numbermovie: number = 1;
  Mov: any;

  constructor(
    private formBuilder: FormBuilder,
    private formMovie: MovieService
  ) {}

  ngOnInit(): void {
    this.Mov = this.formBuilder.group({
      NameMovie: [{ value: '', disabled: false }],
      TypeMovie: [{ value: '', disabled: false }],
      MoviePrice: [{ value: '', disabled: false }],
      Movieid: [{ value: '', disabled: false }]
    });
  }

  onClicked() {
    this.formMovie.getMovie(this.numbermovie).subscribe(res => {
      console.log(res);
      this.Mov = res;
    });
  }
}
