type ButtonProps = {
  title: string;
  onClick?: () => void;
  action?: () => void; // Add support for action prop
};

const Button = ({ title, onClick, action }: ButtonProps) => {
  const handleClick = onClick || action; // Use onClick if provided, otherwise action
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {title}
    </button>
  );
};

export default Button;