const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
