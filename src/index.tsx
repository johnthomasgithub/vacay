import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //embedding store into the app

  <Provider store={store}>
    <App />
  </Provider>
);
