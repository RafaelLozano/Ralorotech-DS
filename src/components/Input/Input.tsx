import "./input.css";
import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
  search?: boolean;
}


export const Input = forwardRef<HTMLInputElement, InputProps> (function Input({type = "text", className, ...props}: InputProps, ref) {
  return (
    <div >

    <input type={type} className={`rl-Input ${className}`} {...props} ref={ref} />
    {props.search && <button className="rl-Input__search">Search</button>}
    </div>
  )
})

Input.displayName = "Input";