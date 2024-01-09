// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Avatar, Button } from 'monday-ui-react-core';

export function App() {
  return (
    <>
      <Button style={{ backgroundColor: 'green' }}>Hola Mundo</Button>

      <Avatar
        ariaLabel="Hadas Fahri"
        size={Avatar.sizes.LARGE}
        src="https://style.monday.com/static/media/person1.de30c8ee.png"
        type={Avatar.types.IMG}
      />
    </>
  );
}

export default App;
