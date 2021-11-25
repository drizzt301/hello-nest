import { IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types"
import { fromEventPattern } from "rxjs";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}


    // @IsString()
    // readonly title?: string;

    // @IsNumber()
    // readonly year?: number;
    
    // @IsString({ each: true })
    // readonly genres?: string[];    
    // ?는 필수사항이 아니다 의미