import { useSearchParams } from "react-router";
import { useDebounce } from "../hooks/useDebounce";
import Names from "../services/MOCK_DATA.json";
import { DeveloperCard } from "./DeveloperCard";
import { useEffect } from "react";

export const DeveloperList = ({ searchQuery }) => {
    const { query, filter } = searchQuery;

    const [searchParams, setSearchParams] = useSearchParams();
    const debounceVal = useDebounce(query);

    useEffect(() => {
        setSearchParams((params) => {
            params.set("page", "1");
            return params;
        });
    }, [debounceVal, filter]);

    const pageParam = Number(searchParams.get("page"));
    const page = Number.isInteger(pageParam) && pageParam >= 1 ? pageParam : 1;

    let result = Names.filter(
        (name) =>
            name.name.toLowerCase().includes(debounceVal.toLowerCase()) ||
            name.skills.some((s) =>
                s.toLowerCase().includes(debounceVal.toLowerCase()),
            ),
    ).filter((name) => filter === "" || name.city === filter);
    const totalPages = Math.ceil(result.length / 6);
    result = result.slice(6 * (page - 1), 6 * page);

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {result.length ? (
                    result.map((name) => (
                        <DeveloperCard name={name} key={name.id} />
                    ))
                ) : (
                    <div className="col-span-full flex min-h-48 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-cardLight dark:bg-cardDark dark:border-slate-700">
                        <h3 className="font-medium text-textSecondaryLight dark:text-textSecondaryDark">
                            No Developer found
                        </h3>
                    </div>
                )}
            </div>
            {result.length > 0 && (
                <div className="mt-7 flex items-center justify-center gap-2">
                    <button
                        onClick={() =>
                            setSearchParams((params) => {
                                params.set("page", String(page - 1));
                                return params;
                            })
                        }
                        disabled={page <= 1}
                        className="h-9 min-w-9 px-3 flex items-center justify-center rounded-full border border-slate-200 bg-cardLight font-medium text-textSecondaryLight transition hover:opacity-65 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-cardDark dark:text-textSecondaryDark
                        "
                    >
                        Prev
                    </button>
                    <span className="flex px-3 h-9 min-w-9 items-center justify-center rounded-full bg-primary font-semibold text-white">
                        {page}
                    </span>
                    <span className="px-1 text-textSecondaryLight dark:text-textSecondaryDark">
                        of {totalPages}
                    </span>
                    <button
                        onClick={() =>
                            setSearchParams((params) => {
                                params.set("page", String(page + 1));
                                return params;
                            })
                        }
                        disabled={page >= totalPages}
                        className="h-9 min-w-9 px-3 flex justify-center items-center rounded-full border border-slate-200 bg-cardLight font-medium text-textSecondaryLight transition hover:opacity-65 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-cardDark dark:text-textSecondaryDark"
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
};
