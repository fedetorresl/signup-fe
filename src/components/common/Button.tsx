export const Button = ({
  children,
  filled,
}: {
  children: React.ReactNode;
  filled: boolean;
}) => {
  return (
    <button
      className={`w-48 ${
        filled
          ? "bg-blue-100 text-white"
          : "border-solid border-2 border-blue-100 text-blue-100 hover:bg-blue-100 hover:text-white"
      } rounded-full px-4 py-4 font-Mulish text-lg font-medium transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
    >
      {children}
    </button>
  );
};
