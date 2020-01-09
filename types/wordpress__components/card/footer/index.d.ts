import Card from '..';
import { StyledComponent } from '@emotion/styled';

declare namespace CardFooter {
    interface Props {
        /**
         * `className` of the container.
         */
        className?: string;

        /**
         * Renders a borderless card.
         */
        isBorderless?: boolean;

        /**
         * Add visual shading style.
         */
        isShady?: boolean;

        size?: Card.CardSize;
    }
}

declare const CardFooter: StyledComponent<JSX.IntrinsicElements['div'], CardFooter.Props, {}>;

export default CardFooter;
