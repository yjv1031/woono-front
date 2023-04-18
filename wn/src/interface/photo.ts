export interface photo {
  name: string;
  seq: number;
};

export interface photoListState {
  list: photo[];
};

export interface photoFileUploadObject {
  file: File;
  preview: string;
};