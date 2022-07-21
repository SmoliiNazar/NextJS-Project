import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

import { layoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';


export const Layout = ({ children }: layoutProps): JSX.Element => {
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