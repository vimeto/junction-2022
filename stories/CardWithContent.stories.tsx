import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Card, Props as CardProps } from "../components/ui/Card/Card";
import { CardTitle, Props as CardTitleProps } from "../components/ui/Card/CardTitle"
import { CardText, Props as CardTextProps } from "../components/ui/Card/CardText";
import { CardWithImage, Props as CardImageProps } from "../components/ui/Card/CardWithImage";

const conf = {
    title: 'CardWithContent',
    components: { Card, CardTitle, CardWithImage },
    argTypes: {
        bgGray: {
            type: 'boolean'
        }
    }
} as ComponentMeta<(typeof Card) & (typeof CardTitle) & (typeof CardWithImage)>;

export default conf;

const Template: ComponentStory<(args: (CardProps & CardTitleProps & CardImageProps)) => JSX.Element> = (args) => {
    return (
        <Card bgGray={args.bgGray}>
            <CardTitle titleTextColor={args.titleTextColor}>
                Santeri 
            </CardTitle>
            <CardWithImage textColor={args.textColor} imageAlt={args.imageAlt}>
                Went for a walk and saw an epic squirrel. Love Santeri.
            </CardWithImage>
        </Card>
    )
};

export const Gray = Template.bind({});
Gray.args = {
    bgGray: true,
    titleTextColor: 'black',
    textColor: 'black',
    imageAlt: 'hieno kuva'
};
