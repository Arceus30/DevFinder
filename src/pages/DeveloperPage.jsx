import { Link, useLoaderData } from "react-router";

export const DeveloperPage = () => {
    const data = useLoaderData();

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl font-bold text-textPrimaryLight dark:text-textPrimaryDark">
                    Developer not found
                </h1>

                <Link
                    to="/"
                    className="mt-4 font-medium text-primary hover:underline"
                >
                    Back to developers
                </Link>
            </div>
        );
    }

    const initials = data.name
        ?.split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <section>
            <Link
                to="/"
                className="
                    inline-flex
                    items-center
                    gap-1
                    text-sm
                    font-semibold
                    text-primary
                    transition
                    hover:opacity-80
                "
            >
                Back to developers
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 overflow-hidden rounded-xl border border-slate-200 bg-cardLight shadow-sm dark:border-slate-700 dark:bg-cardDark">
                <aside className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r dark:border-slate-700">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div
                            className="
                            flex
                            h-24
                            w-24
                            items-center
                            justify-center
                            rounded-full
                            bg-primaryLight
                            text-2xl
                            font-bold
                            text-primary
                            ring-4
                            ring-primary/10
                            dark:bg-slate-700
                            dark:text-indigo-300
                        "
                        >
                            {initials}
                        </div>
                        <div className="mt-6 w-full space-y-4">
                            <p className="flex items-center gap-2 text-sm text-textSecondaryLight dark:text-textSecondaryDark">
                                <span>📍</span>
                                {data.city}
                            </p>
                            <p className="flex items-center gap-2 text-sm text-textSecondaryLight dark:text-textSecondaryDark">
                                <span>💼</span>
                                {data.experience} years experience
                            </p>
                        </div>
                    </div>
                </aside>
                <div className="p-6 sm:p-8">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-textPrimaryLight dark:text-textPrimaryDark">
                            {data.name}
                        </h1>
                    </div>
                    <section className="mt-7">
                        <h2 className="font-bold text-textPrimaryLight dark:text-textPrimaryDark">
                            About
                        </h2>
                        <p className="mt-2 max-w-2xl leading-6 text-textSecondaryLight dark:text-textSecondaryDark">
                            {data.bio}
                        </p>
                    </section>

                    <section className="mt-7">
                        <h2 className="font-bold text-textPrimaryLight dark:text-textPrimaryDark">
                            Skills
                        </h2>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {data.skills?.map((skill) => (
                                <span
                                    className="rounded-md bg-primaryLight px-2.5 py-1 font-medium text-primary dark:bg-slate-700 dark:text-indigo-300"
                                    key={skill}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                    <section className="mt-7">
                        <h2 className="font-bold text-textPrimaryLight dark:text-textPrimaryDark">
                            Experience
                        </h2>

                        <div className="mt-3">
                            <strong className="font-semibold text-textPrimaryLight dark:text-textPrimaryDark">
                                {data.experience} years
                            </strong>
                            <p className="mt-1 leading-6 text-textSecondaryLight dark:text-textSecondaryDark">
                                Professional development experience across{" "}
                                {data.skills?.slice(0, 3).join(", ")}.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};
