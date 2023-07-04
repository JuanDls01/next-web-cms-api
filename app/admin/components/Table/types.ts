export type ColumnType = {
  Header: string;
  accesor: string;
};

export type GenericCellType = {
  [key: string]: string | boolean | number | null;
};
