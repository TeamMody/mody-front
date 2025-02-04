import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { PostData } from './my/my';

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

export interface PostProps {
  postId: number;
  s3Url: string;
  activeTab: string;
}

export interface PaginationProps {
  cursor: number | null;
  size: number;
}
