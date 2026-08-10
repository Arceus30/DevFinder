import { Link } from "react-router";

export const NotFoundPage = () => {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <p className="text-6xl font-bold text-primary">404</p>

            <h1 className="mt-4 text-2xl font-bold text-textPrimaryLight dark:text-textPrimaryDark">
                Page not found
            </h1>

            <p className="mt-2 text-sm text-textSecondaryLight dark:text-textSecondaryDark">
                The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="
                    mt-6
                    rounded-lg
                    bg-primary
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-indigo-600
                "
            >
                Home
            </Link>
        </div>
    );
};
