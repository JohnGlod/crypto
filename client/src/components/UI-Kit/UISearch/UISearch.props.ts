export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void;
  theme?: 'light' | 'dark';
}