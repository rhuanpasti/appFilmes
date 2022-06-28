import { Component } from '@angular/core';
import { MoviesService } from '../../theMovieDB/movies.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [MoviesService]

})
export class Tab3Page {

  

  constructor(public MovieService: MoviesService) { }

  public lista_filmes = new Array<any>();

  carregaPagina() {
    this.MovieService.getNowPlaying(1  , 'pt').subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = this.lista_filmes.concat(response.results);
        console.log(this.lista_filmes);
      },
      error => {
        console.log(error);
      }
    );
  }

  ionViewDidEnter() {
    this.carregaPagina();
  }


}
