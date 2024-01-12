export interface FilmItemMainPage {
    Title:string;
    Type:string;
    Year:string;
    imdbID:string;
    Poster:string
}



interface RatingItem {
    Source:string,
    Value: string
}
export interface FilmItemInfoPage{
    Actors:string,
    Awards:string,
    BoxOffice:string,
    Country:string,
    DVD:string,
    Director:string,
    Genre:string,
    Language:string,
    Metascore:string,
    Plot:string,
    Poster:string,
    Production:string,
    Rated:string,
    Ratings:RatingItem[],
    Released:string,
    Response:string,
    Runtime:string,
    Title:string,
    Type:string,
    Website:string,
    Writer:string,
    Year:string,
    imdbID:string,
    imdbRating:string,
    imdbVotes:string
}



export interface IconProp {
    width:number,
    height:number
}