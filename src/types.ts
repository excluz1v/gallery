export type TPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type TPhotoState = {
  photos: TPhoto[];
  isLoading: boolean;
  currentPage: number;
  error: string;
};
