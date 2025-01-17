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
