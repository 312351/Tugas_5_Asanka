type ButtonProps = {
  Label: string;
  x: "4" | "6" | "8"; 
}

export default function Button1({ Label, x }: ButtonProps) {
  const paddingClass = {
    "4": "px-4",
    "6": "px-6",
    "8": "px-8",
  }[x] || "px-4";

  return (
    <button className={`py-4 ${paddingClass} bg-gradient-5 rounded-[8px] text-[2vh] font-bold text-black`}>
      {Label}
    </button>
  );
}
