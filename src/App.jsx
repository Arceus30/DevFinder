import { Outlet, Link } from "react-router";
import { ThemeButton } from "./components/ThemeButton";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

function App() {
    return (
        <ThemeContextProvider>
            <header className="mx-auto px-5 py-4 flex items-center justify-between border-b border-slate-200 bg-cardLight dark:border-slate-800 dark:bg-backgroundDark sm:px-6 lg:px-8">
                <Link to="/">
                    <h1 className="text-4xl font-bold tracking-tight text-primary">
                        DevFinder
                    </h1>
                    <h2 className="font-medium text-textSecondaryLight dark:text-textSecondaryDark">
                        Find Developers
                    </h2>
                </Link>
                <div>
                    <ThemeButton />
                </div>
            </header>
            <main className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
                <Outlet />
            </main>
        </ThemeContextProvider>
    );
}

export default App;
