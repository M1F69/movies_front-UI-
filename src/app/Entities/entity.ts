export type MoveEntity={
  name: string,
  description: string,
  year:number,
  type: TypeMoveEntity
  id: string ,
  authorId: string ,
  imageId: string,
  imageHRef: string,
}

export type TypeMoveEntity={
  0: "Film";
  1: "Anime";
  2: "Serial";
}
