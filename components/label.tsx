import React from 'react';
import { cn } from '@/lib/utils';

type LabelProps ={
  children?:React.ReactNode | React.ReactNode[],
  className?:string;
}

export const Button = ({ children, className }: LabelProps) => (
  <button className={cn('rounded-2xl px-9 py-5', className)}>{children}</button>
);




export const Label = ({ children, className }: LabelProps) => (
    <button className={cn('px-2 font-medium h-12 align-top rounded-md', className)}>{children}</button>
  );