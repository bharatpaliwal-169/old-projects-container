import Layout from '../components/Layout';
import '../styles/style.css'
import '../styles/media.css'
import '../styles/globals.css'
import { Provider } from "react-redux";
import Store from "../Redux/store"
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();
function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default App;
// export {history}