interface PostData {
  content: string;
  isPublic: boolean;
  s3Urls: string[] | undefined;
}
export const createPost = async ({ content, isPublic, s3Urls }: PostData) => {
  try {
    console.log(content, isPublic, s3Urls);
  } catch {}
};
