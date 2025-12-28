const Badge = ({ children, className = '', tone = 'accent', ...props }) => {
  const classes = ['badge', `badge--${tone}`, className].filter(Boolean).join(' ');
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
