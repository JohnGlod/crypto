import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface GridContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  list: any[],
  loading ?: boolean,
  className ?: string,  
}
