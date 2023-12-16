export type MoveEntity = {
  name: string,
  description: string,
  year: number,
  type: TypeMoveEntity
  id: string,
  authorId: string,
  imageId: string,
  imageHRef: string,
  viewed: boolean,
  genre: GenreEnum
}


export type TypeMoveEntity = {
  0: "Film";
  1: "Cartoon";
  2: "Serial";
  3: "Anime"
}

export type GenreEnum = {
  0: "fantastic",
  1: "horror",
  2: "family",
  3: "musical",
  4: "crime",
  5: "melodrama",
  6: "comedy",
  7: "documentary",
  8: "actionmovie",
  9: "military",
  10: "detective",
}

export type CatalogType = {
  index:number,
  title:string,
  url:string
}

// фантастика                                  fantastic
// ужасы                                       horror
// семейный          family
// мюзикл                                      musical
// криминал                                    crime
// мелодрама                                   melodrama
// комедия                                     comedy
// документальный     documentary
// боевик                                      actionmovie
// военный                                     military
// детектив                                    detective
//horror comedy actionmovie fantastic
