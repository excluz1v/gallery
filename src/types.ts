export type TCard = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type TPhotoState = {
  photos: TCard[];
};
