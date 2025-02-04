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
}

export interface PostResponse {
  postResponses: PostData[];
  cursorPagination: {
    hasNext: boolean;
    cursor: null;
  };
}
