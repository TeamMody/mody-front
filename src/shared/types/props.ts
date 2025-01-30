import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface ActiveProps {
  $active: boolean;
}

export type HeaderAction = {
  icon: string;
  onClick?: () => void;
};

export interface StateProps<T> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

export interface FieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  touchedFields: FieldValues;
}

export interface FileData {
  s3Url: string;
}

export interface PostData {
  postId: number;
  files: FileData[];
}
export interface PostProps {
  data: PostData;
  activeTab: string;
}

export interface PaginationProps {
  cursor: number | null;
  size: number;
}
