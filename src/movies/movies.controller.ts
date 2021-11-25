import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
    getOne(@Param("id") movieId: number): Movie {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieId: number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDto){
        return this.moviesService.update(movieId, updateData);
    }

}
