import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParamElement>, HTMLParamElement>{
  className?: string;
  children: React.ReactNode;
}
