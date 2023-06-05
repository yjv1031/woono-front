export interface photo {
  name: string;
  seq: number;
  fileName: string;
  userNo: number;
};

export interface photoListState {
  list: photo[];
};

export interface photoFileUploadObject {
  file: File;
  preview: string;
};