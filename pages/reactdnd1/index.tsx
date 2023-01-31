import Chess from '../../src/components/dnd/components/Chess';
import ArbitrarilyDrag from '../../src/components/dnd/components/arbitrarilyDrag';
import CardSort from '../../src/components/dnd/components/cardSort';
import CardAssemble from '../../src/components/dnd/components/cardAssemble';
import ListSort from '../../src/components/dnd/components/listSort';
import DragPreviewImg from '../../src/components/dnd/components/dragPreviewImg';
import DragPreviewDom from '../../src/components/dnd/components/dragPreviewDom/index.module';
import MultiDrag from '../../src/components/dnd/components/multiDrag';

const App = () => {
  return (
   <div>
    <CardAssemble />
   </div>
  );
};

export default App;
