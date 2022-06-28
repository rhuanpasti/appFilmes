import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from "./Tab2Page";
import { HttpClientModule} from '@angular/common/http';
import { MoviesService } from '../../theMovieDB/movies.service';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})

export class Tab2PageModule{}
