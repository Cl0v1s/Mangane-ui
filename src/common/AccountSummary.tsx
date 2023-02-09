import { Loader } from './../ui/ui';
import { IPartialAccount, IAccount, isPartial } from "../types/IAccount"
import { useDirectory } from '../hooks/useDirectory';
import { useMemo } from 'preact/hooks';

interface IAccountSummary {
    id: string,
}

const AccountSummary = ({ id }: IAccountSummary ) => {
    const directory = useDirectory();
    const account = useMemo(() => directory(id), [directory]);

    if(isPartial(account)) return <Loader />;
    return (
        <div className={"d-flex gap-2"}>
            <img src={(account as IAccount).avatar_static} className={"rounded-circle w-[50px] h-[50px]"} />
            <div>
                <div className="font-bold">
                    { (account as IAccount).display_name }
                </div>
                <div className={"text-sm"}>
                    { (account as IAccount).username }
                </div>
            </div>
        </div>
    )
};

export { AccountSummary };