import { useState } from "react";
import { useLoaderData } from "react-router";
import { DeveloperList } from "../components/Developerlist";

export const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState({ query: "", filter: "" });
    const cities = useLoaderData();

    return (
        <>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                    <span className="absolute pointer-events-none left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        🔍
                    </span>
                    <input
                        type="text"
                        value={searchQuery.query}
                        onChange={(e) =>
                            setSearchQuery((prev) => ({
                                ...prev,
                                query: e.target.value,
                            }))
                        }
                        autoFocus
                        placeholder="Search here..."
                        className="h-11 w-full pl-11 pr-4 rounded-lg border border-slate-200 bg-cardLight text-textPrimaryLight outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-slate-700 dark:bg-cardDark dark:text-textPrimaryDark"
                    />
                </div>
                <div className="relative sm:w-48">
                    <span className="absolute pointer-events-none left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        📍
                    </span>
                    <select
                        value={searchQuery.filter}
                        onChange={(e) =>
                            setSearchQuery((prev) => ({
                                ...prev,
                                filter: e.target.value,
                            }))
                        }
                        className="h-11 w-full px-10 appearance-none rounded-lg border border-slate-200 bg-cardLight text-textPrimaryLight outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-slate-700 dark:bg-cardDark dark:text-textPrimaryDark "
                    >
                        <option value="">Select city</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                    <span className="absolute pointer-events-none right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        ▼
                    </span>
                </div>
            </div>
            <DeveloperList searchQuery={searchQuery} />
        </>
    );
};
