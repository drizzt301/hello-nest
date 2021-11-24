import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
//import { get } from 'http';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()//''일때
    getAll() :Movie[]{
        return this.moviesService.getAll();
    }
    
    // @Get("/search")
    // search(@Query('year') searchingYear: string) {
    //     return `We are searchging for a movie made after: ${searchingYear}`;
    // }    
    
    @Get("/:id")// /'숫자'일때
    getOne(@Param("id") movieId: string): Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param("id") movieId: string, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }
}
