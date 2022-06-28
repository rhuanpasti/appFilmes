import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private chave="dcc21d5028dd9c3a6e68b2f51cbd7aea";
  private caminhoPadrao="https://api.themoviedb.org/3";

  constructor(public http:HttpClient) { }

  public getPopularMovies(page=1, language="pt-BR"){
    let filmes=`${this.caminhoPadrao}/movie/popular?page=${page}&language=${language}&api_key=${this.chave}`
    return this.http.get(filmes);
  }

  public getNowPlaying(page=1,language="en-US"){
    let filmes=`${this.caminhoPadrao}/movie/now_playing?page=${page}&language=${language}&api_key=${this.chave}`
    return this.http.get(filmes);
  }
}
