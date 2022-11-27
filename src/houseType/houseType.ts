import { Media, Price } from '../';

export interface HouseType {
  id: number;
  name: string;
  description: string;
  thumbnail: Media;
  details: string; // TODO: update
  price: Price; // TODO: update
  about: string;
  images: Media[];
  floorplan: Media[];
  flyover: Media;
  options: string[];
}