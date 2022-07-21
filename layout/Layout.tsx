import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

import { layoutProps } from './Layout.props';
import { FunctionComponent } from 'react';


const Layout = ({ children }: layoutProps): JSX.Element => {
      return (
            <>
                  <Header/>
                  <div>
                        <Sidebar/>
                        <div>
                              {children}
                        </div>
                  </div>
                  <Footer/>
            </>
      );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
      return function withLayoutComponent(props: T): JSX.Element {
            return (
                  <Layout>
                        <Component {...props}/>
                  </Layout>
            );
      };
};