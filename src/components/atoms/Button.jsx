const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`bg-blue-600 rounded-xl px-6 py-3 text-white ${className}`}
  >
    {children}
  </button>
);

export default Button;
