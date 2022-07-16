import { AppProps } from '../node_modules/next/dist/shared/lib/router/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
