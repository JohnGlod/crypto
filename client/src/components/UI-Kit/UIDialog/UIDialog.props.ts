export interface DialogProps {
  active: boolean;
  setActive: (value: boolean) => void;
  children: React.ReactNode;
}
