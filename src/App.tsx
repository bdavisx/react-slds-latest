import {useState} from 'react'
import './App.css'
import {Button, ColorPicker, IconSettings} from "@salesforce/design-system-react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <span><Button label="Hello Button"/></span>
      <span>
        <IconSettings iconPath="/assets/icons">
          <ColorPicker labels={{label: 'Choose Color'}} id="default-color-picker"/>
        </IconSettings>
      </span>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="brand" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          style={{ height: "100vh" }}
        />
      </div>
    </>
  )
}

export default App
