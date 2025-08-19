type ButtonProps = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {title}
    </button>
  );
};

export default Button;
