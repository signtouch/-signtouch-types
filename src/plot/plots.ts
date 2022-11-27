type FixedSizeArray<N extends number, T> = N extends 0 ? never[] : {
  0: T;
  length: N;
} & ReadonlyArray<T>;

export interface Plot {
  id: string;
  houseType: string;
  number: string;
  status: 'available' | 'reserved' | 'sold' | 'future release';
  coordinates: FixedSizeArray<2, string>;
}
