import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);
