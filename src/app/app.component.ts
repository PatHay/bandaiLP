import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

export interface GameFeature{
  title: string;
  image: string;
  cols: number;
  rows: number;
}

export interface GameRequirement{
  label: string;
  min: string;
  rec?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  features: GameFeature[] = [
    {
      title: '3vs3 Tag/Support',
      image:
        'https://cdn-cms.bnea.io/sites/default/files/styles/game_feature_small/public/games/features/large/dbfightz_ksp1.jpg',
      cols: 5,
      rows: 3,
    },
    {
      title: 'High-End Anime Graphics',
      image:
        'https://cdn-cms.bnea.io/sites/default/files/styles/game_feature_small/public/games/features/large/feature2_4.jpg',
      cols: 3,
      rows: 3,
    },
    {
      title: 'Spectacular Fights',
      image:
        'https://cdn-cms.bnea.io/sites/default/files/styles/game_feature_small/public/games/features/large/feature3_4.jpg',
      cols: 3,
      rows: 3,
    },
    {
      title: '3vs3 Tag/Support',
      image:
        'https://cdn-cms.bnea.io/sites/default/files/styles/game_feature_small/public/games/features/large/dbfightz_ksp1.jpg',
      cols: 5,
      rows: 3,
    },
  ];


  // Password Toggle Field
  hide = true;

  // Reactive Form Group
  registerForm: FormGroup;

  // Game Requirements
  requirements: GameRequirement[] = [
    {
      label: 'Operating System',
      min: 'Windows 7 or higher (32/64 bit)',
    },
    {
      label: 'CPU',
      min: 'Multi-core Processor',
    },
    {
      label: 'Video Card',
      min: 'Geforce 86xx or Radeon HD 83xx',
      rec: 'Geforce GTX 450 or Radeon HD 6850',
    },
    {
      label: 'DirectX',
      min: 'DirectX 9.0c',
    },
    {
      label: 'System Memory',
      min: '3GB',
      rec: '4GB',
    },
    {
      label: 'Storage',
      min: '3GB of available space',
      rec: '4GB of available space',
    },
    {
      label: 'Internet Connection',
      min: 'Broadband Internet Connection',
    },
  ];

  // Table of Columns
  requirementColumns = ['label', 'min', 'rec'];


  // returns an array of last 100 years
  get days(){
    const days = new Date(new Date().getFullYear(), 1, 0).getDate();

    return Array(days)
    .fill(0)
    .map((_, index) => days - index)
    .reverse();
  }

  // Determines whether or not to show video
  get showVideo(){
    return this._activatedRoute.snapshot.queryParams.utm_content === 'video';
  }


  constructor(private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder){}

  ngOnInit(){
    this.registerForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      birthdate_month: ['', Validators.required],
      birthdate_day: ['', Validators.required],
      birthdate_year: ['', Validators.required],
      subscriptions: [true],
    });
  }

}
