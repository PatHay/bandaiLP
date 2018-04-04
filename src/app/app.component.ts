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
      title: 'Atmospheric Visual',
      image:
        'https://cdn-cms.bnea.io/sites/default/files/games/features/large/feature1_3.jpg',
      cols: 5,
      rows: 3,
    },
    {
      title: 'Interconnected World',
      image:
        'https://cdn-cms.bnea.io/sites/default/files/styles/game_feature_small/public/games/features/large/feature2_3.jpg',
      cols: 7,
      rows: 3,
    },
    {
      title: 'Sword Action',
      image:
        'https://cdn-cms.bnea.io/sites/default/files/styles/game_feature_small/public/games/features/large/feature3_3.jpg',
      cols: 5,
      rows: 3,
    },
    {
      title: 'Unique Online System',
      image:
        'https://cdn-cms.bnea.io/sites/default/files/styles/game_feature_small/public/games/features/large/feature4_1.jpg',
      cols: 7,
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


  // returns array of days based on month
  get days(){
    var days = new Date(new Date().getFullYear(), 1, 0).getDate();

    return Array(days)
    .fill(0)
    .map((_, index) => (days-index))
    .reverse();
  }

  // returns array of last 75 years
  get years() {
    return Array(75)
    .fill(0)
    .map((_, index) => new Date().getFullYear() - index)
    .reverse();
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

    console.log()

  }

}
