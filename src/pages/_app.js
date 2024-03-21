import "@/styles/globals.css";
import {PersistGate} from "redux-persist/integration/react"
import { store, persistor  } from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {

  return (
    <div>
      {/* this is the one that is working */}
{/* // provider is use to allow the view file to access the action and the reducer */}

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Component {...pageProps} /> 
    </PersistGate>
  </Provider>
  </div>
   ) ;
}
