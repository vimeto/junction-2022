type Props = {
  aux?: string;
  title: string;
};

const BearWithBubble = ({ title, aux }: Props) => (
  <div className="w-full">
    <div className="flex justify-end">
      <img className="h-12 w-12" src="/bear.svg" alt="Bear" />
    </div>
    <div className="flex justify-center relative">
      <img className="w-1/2" src="/speech_bubble.svg" alt="" />
      <div
        className="flex flex-col items-center absolute -translate-y-1/2"
        style={{ top: "60%" }}
      >
        <div className="text-md">{aux}</div>
        <div className="font-bold text-lg">{title}</div>
      </div>
    </div>
  </div>
);

export default BearWithBubble;
