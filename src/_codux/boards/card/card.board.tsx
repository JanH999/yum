import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#939393',
        windowWidth: 998,
        canvasWidth: 306,
    },
});
