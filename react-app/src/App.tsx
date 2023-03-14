// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import TextField from './components/TextField';
import Kiosk from './pages/KioskIndex';

export default function App() {
  return (
    <>
      <Kiosk />
      <TextField
        label="Name"
        placeholder=""
        text="harry"
        setFilterText={() => null}
      />
    </>
  );
}
