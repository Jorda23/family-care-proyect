// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Avatar, Button } from 'monday-ui-react-core';
import {
  AvatarSize,
  AvatarType,
} from 'monday-ui-react-core/dist/types/components/Avatar/AvatarConstants';

export function App() {
  return (
    <>
      <Button>hola como estas</Button>
      <Avatar
        ariaLabel="Hadas Fahri"
        size={'large' as AvatarSize}
        src="https://style.monday.com/static/media/person1.de30c8ee.png"
        type={'img' as AvatarType}
      />
    </>
  );
}

export default App;
