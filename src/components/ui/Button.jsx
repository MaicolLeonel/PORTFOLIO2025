const Button = ({
  variant = 'primary',
  as = 'button',
  href,
  children,
  className = '',
  ...props
}) => {
  const Component = href ? 'a' : as;
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');
  const finalProps = { ...props };

  if (Component === 'button' && !href && !finalProps.type) {
    finalProps.type = 'button';
  }

  return (
    <Component className={classes} href={href} {...finalProps}>
      {children}
    </Component>
  );
};

export default Button;
