import { useRouteError } from "react-router";

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <div className="rounded-xl border border-red-200 bg-white p-8 shadow-sm dark:border-red-900/50 dark:bg-cardDark">
                <h1 className="text-2xl font-bold text-red-500">
                    Error Occurred
                </h1>

                <p className="mt-3 text-sm text-textSecondaryLight dark:text-textSecondaryDark">
                    {error?.statusText}
                </p>

                <p className="mt-1 text-sm text-textSecondaryLight dark:text-textSecondaryDark">
                    {error?.message}
                </p>
            </div>
        </div>
    );
};
