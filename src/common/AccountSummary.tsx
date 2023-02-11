import { Loader } from './../ui/ui';
import { IPartialAccount, IAccount, isPartial } from "../types/IAccount"
import { useDirectory } from '../hooks/useDirectory';
import { useMemo } from 'preact/hooks';

interface IAccountSummary {
    account: IPartialAccount,
}

const AccountSummary = ({ account }: IAccountSummary ) => {
    const directory = useDirectory();
    const actualAccount = useMemo(() => directory(account), [directory]);
    if(isPartial(actualAccount)) return <Loader />;
    return (
        <div className={"d-flex gap-2"}>
            <img src={(actualAccount as IAccount).avatar_static} className={"rounded-circle w-[50px] h-[50px]"} />
            <div>
                <div className="font-bold">
                    { (actualAccount as IAccount).display_name }
                </div>
                <div className={"text-sm"}>
                    { (actualAccount as IAccount).username }
                </div>
            </div>
        </div>
    )
};

export { AccountSummary };