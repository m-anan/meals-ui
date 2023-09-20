import React, { HTMLAttributes } from "react";
import Footer from "../components/common/Footer";
import Header, { HeaderProps } from "../components/common/Header/Index";

export interface DefaultLayoutProps {
  footer?: boolean;
  fixedNavBar?: boolean;
  children?: React.ReactNode;
  headerProps?: HeaderProps;
  navBar?: boolean;
  containerProps?: HTMLAttributes<HTMLElement>;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  footer = true,
  fixedNavBar = false,
  headerProps,
  navBar = true,
  containerProps,
}) => {
  return (
    <div className="font-sans scroll-smooth">
      {navBar && (
        <div
          className={`w-full ${fixedNavBar ? "fixed z-50 top-6" : " pb-10"}`}
        >
          <Header {...headerProps} />
        </div>
      )}
      <main
        {...containerProps}
        className={` min-h-screen ${containerProps?.className}`}
      >
        {children}
      </main>
      {footer && <Footer />}
    </div>
  );
};
export default DefaultLayout;
