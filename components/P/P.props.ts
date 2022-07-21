import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Pprops extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    p?: 'default' | 'small' | 'big';
    children: ReactNode;
}