import { Media } from '../';

export interface Option {
  id: string;
  description: string;
  optionType: string;
  thumbnail: Media;
  images: Media[];
}
