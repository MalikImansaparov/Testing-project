export type InputForm = {
  id?: number;
  title: string;
  description: string;
  price: number;
  image: null;
};

export type stateTypes = {
  books: any[];
  book: null | {};
  favCount: null | number;
  favorite: any[];
};
