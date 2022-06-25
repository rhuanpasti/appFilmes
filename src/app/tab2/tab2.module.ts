import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from "./Tab2Page";
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule} from '@angular/common/http';
import { MoviesService } from '../../theMovieDB/movies.service';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})

export class Tab2PageModule{}
