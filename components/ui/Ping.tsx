import { RarityLevel } from "../../lib/types";

type Props = {
  rarity?: number;
};

export const Ping = ({ rarity = 0 }: Props) => {
  const rarityToColorMap: Record<string, { p: string; s: string }> = {
    0: {
      p: "bg-gray-500",
      s: "bg-gray-400",
    },
    10: {
      p: "bg-sky-500",
      s: "bg-sky-400",
    },
    20: {
      p: "bg-purple-500",
      s: "bg-purple-400",
    },
    30: {
      p: "bg-orange-500",
      s: "bg-orange-400",
    },
  };

  const { p, s } = rarityToColorMap[rarity] ?? rarityToColorMap[0];
  return (
    <span className="flex h-3.5 w-3.5">
      <span
        className={`animate-ping absolute inline-flex h-3.5 w-3.5 rounded-full opacity-75 ${s}`}
      ></span>
      <span
        className={`relative inline-flex rounded-full h-3.5 w-3.5 bg-sky-500 ${p}`}
      ></span>
    </span>
  );
};
