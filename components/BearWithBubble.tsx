type Props = {
  aux?: string;
  bearSrc?: string;
  title: string;
  hideBubble?: boolean;
};

// TODO: update to <Image />

const BearWithBubble = ({ title, aux, bearSrc, hideBubble }: Props) => (
  <div className="w-full">
    <div className="flex justify-end pr-10 pt-2">
      <img
        className="h-16 w-16"
        src={bearSrc || "/neutral_bear.png"}
        alt="Bear"
      />
    </div>
    {!hideBubble && (
      <div className="flex justify-center relative">
        <img className="w-2/3" src="/speech_bubble.svg" alt="" />
        <div
          className="flex flex-col items-center absolute -translate-y-1/2"
          style={{ top: "60%" }}
        >
          <div className="text-md font-light">{aux}</div>
          <div className="font-bold text-lg">{title}</div>
        </div>
      </div>
    )}
  </div>
);

export default BearWithBubble;
