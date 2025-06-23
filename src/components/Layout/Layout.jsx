import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import { Dotted } from "../BgStyle/Dotted";
import { useMenu } from "../../hooks/useMenu";

export const Layout = ({ children }) => {
  const { activeMenu, isDesktop, handleMenu } = useMenu();
  return (
    <section>
      <section
        className={`w-full min-h-screen relative transition-all duration-300 bg-white ${
          activeMenu ? "lg:pl-[300px] 2xl:pl-0" : "pl-0"
        }`}
      >
        {isDesktop ? (
          <>
            <Dotted style="top-4 right-4" />
            <Dotted style="top-10 right-10" />
            <Dotted style="bottom-4 left-4" />
            <Dotted style="bottom-10 left-10" />
          </>
        ) : null}

        <main className="w-full min-h-screen py-4 sm:p-4 flex flex-col gap-8">
          <Header active={activeMenu} handleMenu={handleMenu} />

          <div className="w-full px-4">{children}</div>
        </main>

        <Nav active={activeMenu} />
      </section>
    </section>
  );
};
