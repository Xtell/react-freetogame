import { getMaxItemID } from "@shared/api";
import { DatePicker } from "antd";
import { useEffect } from "react";
import { AppProvider } from "./providers";

const App = () => {
  useEffect(() => {
    const fn = async () => {
      const resp = await getMaxItemID();
      console.debug(resp);
    };

    fn();
  }, []);

  return <AppProvider />;
};

export default App;
