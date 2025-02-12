import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { RecommendationResponse } from './recommendations/recommendations';
import { RecommendationType } from './home/home';

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
  id: number;
  imageUrl: string;
  recommendType?: RecommendationType;
  result?: RecommendationResponse;
}

export interface PaginationProps {
  cursor: number | null;
  size: number;
}

export interface PatchPostProps {
  isPublic: boolean;
  content: string | undefined;
  postId: number;
}
