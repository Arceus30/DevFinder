import { Link } from "react-router";

export const DeveloperCard = ({ name }) => {
    const initials = name?.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className="p-4 group rounded-xl border border-slate-200 bg-cardLight transition-all duration-200 dark:bg-cardDark shadow-sm hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700">
            <div className="flex items-start gap-3">
                <Link
                    to={`/developer/${name?.id}`}
                    className="h-12 w-12 flex shrink-0 items-center justify-center rounded-full bg-primaryLight text-sm font-bold text-primary transition hover:ring-2 hover:ring-primary/30 dark:bg-slate-700 dark:text-indigo-300"
                >
                    {initials}
                </Link>
                <div className="min-w-0 flex-1">
                    <Link
                        to={`/developer/${name?.id}`}
                        className="block w-fit font-bold text-textPrimaryLight dark:text-textPrimaryDark transition-colors hover:text-primary"
                    >
                        {name?.name}
                    </Link>
                    <p className="mt-1 text-xs text-textSecondaryLight dark:text-textSecondaryDark">
                        📍 {name?.city}
                    </p>
                    <p className="mt-1 text-xs font-medium text-primary">
                        {name?.experience} years experience
                    </p>
                </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {name?.skills?.map((skill) => (
                    <span
                        key={skill}
                        className="
                            rounded-md
                            bg-primaryLight
                            px-2.5
                            py-1
                            text-[11px]
                            font-medium
                            text-primary
                            dark:bg-slate-700
                            dark:text-indigo-300
                        "
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};
