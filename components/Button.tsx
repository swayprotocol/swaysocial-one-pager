import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode
  className?: string
  url: string,
  target?: string
}

const Button = ({ children, className, url, target }: Props) => (
  <div className={`my-3 d-flex ${className}`}>
    <a href={url} className="btn btn-primary" target={target}>{children}</a>
  </div>
);

export default Button;
