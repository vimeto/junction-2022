import { Card } from "@ui/Card/Card";
import { CardTitle } from "@ui/Card/CardTitle";
import { CardWithImage } from "@ui/Card/CardWithImage";

const test = [
  {
    name: "Santeri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum, tenetur cum vitae eum corrupti ad facilis veritatis provident, delectus rem. Quidem soluta illum corrupti.",
    imageSrc: "/happy_bear.svg",
  },
  {
    name: "Santeri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum, tenetur cum vitae eum corrupti ad facilis veritatis provident, delectus rem. Quidem soluta illum corrupti.",
    imageSrc: "/happy_bear.svg",
  },
  {
    name: "Santeri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum, tenetur cum vitae eum corrupti ad facilis veritatis provident, delectus rem. Quidem soluta illum corrupti.",
    imageSrc: "/happy_bear.svg",
  },
  {
    name: "Santeri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum, tenetur cum vitae eum corrupti ad facilis veritatis provident, delectus rem. Quidem soluta illum corrupti.",
    imageSrc: "/happy_bear.svg",
  },
];

const Feed = () => {
  return (
    <div>
      {test.map((p, index) => (
        <Card key={index}>
          <CardTitle>{p.name}</CardTitle>
          <CardWithImage imageAlt={p.imageSrc}>{p.description}</CardWithImage>
        </Card>
      ))}
    </div>
  );
};

export default Feed;
