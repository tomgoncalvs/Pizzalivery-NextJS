"use client";
import { ElementButton } from "./Button.style";

interface ButtonProps {
    children: React.ReactNode;
    inverse?: string;
    link?: string;
    onClick?: React.ReactEventHandler; // tornar isto opcional
  }

const Button: React.FC<ButtonProps> = ({
    children,
    inverse = false, // set default value to false
    link,
    onClick,
    ...rest
}) => {
    return (
        <ElementButton inverse={!!inverse} link={link} onClick={onClick} {...rest}>
            {children}
        </ElementButton>
    );
}

export default Button;
