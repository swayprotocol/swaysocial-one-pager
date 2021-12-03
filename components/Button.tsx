import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode
  className?: string
  url: string
}

const Button = ({ children, className, url }: Props) => (
  <div className={`my-3 d-flex ${className}`}>
    <a href={url} className="btn btn-primary">{children}</a>
  </div>
);

export default Button;
