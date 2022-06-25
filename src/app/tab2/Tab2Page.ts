import { Component } from '@angular/core';
import { MoviesService } from '../../theMovieDB/movies.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [MoviesService]
})




export class Tab2Page {
  public objetoFeed = {
    subtitulo: "DESTINATION",
    conteudo: "Founded in 1829 on an isthmus between Lake ...",
    titulo: "Madison, Wstring",
    imagem: "assets/madison.jpg"
  };

  constructor(public MovieService: MoviesService) { }

  public lista_filmes = new Array<any>();

  carregaPagina() {
    this.MovieService.getPopularMovies(1, 'pt').subscribe(
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
