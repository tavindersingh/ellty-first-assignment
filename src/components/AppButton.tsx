type AppButtonProps = {
  title: string;
  onClick: () => void;
};

export default function AppButton({ title, onClick }: AppButtonProps) {
  return (
    <button
      className="w-full max-w-[340px] bg-[#FFCE22] py-3 rounded hover:bg-[#FFD84D] duration-100 focus:bg-[#FFCE22]"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
