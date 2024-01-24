// components
import Header from "./header";

/**
 * Fixed 800px layout centered on the screen.
 *
 * @returns {JSX.Element} Fixed size wrapper with a header and main HTML elements.
 */
export default function Layout({ children }) {
  return (
    <div className="mx-auto w-[800px] pt-10">
      <Header />
      <main>{children}</main>
    </div>
  );
}
