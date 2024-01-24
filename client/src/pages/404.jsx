// router
import { Link } from "react-router-dom";

/**
 * Displays a 404 error page with navigation links.
 *
 * @returns {JSX.Element} JSX for the 404 error page.
 */
export default function NotFound404() {
  return (
    <div>
      <h1 className="text-2xl">404 :(</h1>
      <nav className="flex flex-col mt-4">
        <Link
          to="/contacts"
          className="underline text-blue-600 hover:text-violet-500"
        >
          contacts
        </Link>
        <Link
          to="/companies"
          className="underline text-blue-600 hover:text-violet-500"
        >
          companies
        </Link>
      </nav>
    </div>
  );
}
