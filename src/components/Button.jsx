import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  variant = "primary",
}) => {
  const variantClass = `button-${variant}`;
  const classes = `button ${variantClass} relative inline-flex items-center justify-center h-11 transition-all duration-300 transform
    ${white ? "hover:text-black" : "hover:text-white"}
    ${px || "px-7"}
    ${white ? "text-black/70" : "text-white"}
    hover:scale-105 hover:shadow-lg ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
