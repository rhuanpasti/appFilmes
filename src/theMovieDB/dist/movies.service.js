"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.chave = "dcc21d5028dd9c3a6e68b2f51cbd7aea";
        this.caminhoPadrao = "https://apithemoviedb.org/3";
    }
    MoviesService.prototype.getPopularMovies = function (page, language) {
        if (page === void 0) { page = 1; }
        if (language === void 0) { language = "eng"; }
        var filmes = this.caminhoPadrao + "/movie/popular?" + page + "&language=" + language + "&api_key=" + this.chave;
        return this.http.get(filmes);
    };
    MoviesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MoviesService);
    return MoviesService;
}());
exports.MoviesService = MoviesService;

//# sourceMappingURL=movies.service.js.map
