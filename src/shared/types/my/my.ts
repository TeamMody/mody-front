export interface FileData {
  s3Url: string;
}

export interface PostData {
  postId: number;
  writerId: number;
  writerNickname: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
  bodyType: string;
  isPublic: boolean;
  files: FileData[];
  isPublic: boolean;
}

export interface PostResponse {
  postResponses: PostData[];
  cursorPagination: CursorPagination;
}

export interface CursorPagination {
  hasNext: boolean;
  cursor: null;
}
