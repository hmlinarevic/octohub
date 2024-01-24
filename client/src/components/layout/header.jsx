/**
 * App header component.
 *
 * @returns {JSX.Element} Header element with an octopus logo and h1 text.
 */
export default function Header() {
  return (
    <header className="mb-10 flex items-center">
      <img
        src="/octopus.png"
        alt="cool purple octopus logo"
        className="h-[58px]"
      />
      <h1 className="ml-2 text-4xl">OctoHub</h1>
    </header>
  );
}
