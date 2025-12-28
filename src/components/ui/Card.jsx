const Card = ({ className = '', children, ...props }) => {
  const classes = ['card', className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
