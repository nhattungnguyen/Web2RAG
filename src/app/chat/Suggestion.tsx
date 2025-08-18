type SuggestionProps = {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
};

export function Suggestion({ icon, text, onClick }: SuggestionProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 p-3 rounded-xl border bg-white shadow-sm hover:bg-gray-50 text-sm text-gray-700 transition"
    >
      {icon}
      {text}
    </button>
  );
}
