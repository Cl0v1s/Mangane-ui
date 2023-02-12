import { Loader } from './../ui/Loader';
import { IPartialAccount, IAccount, isPartial } from "../types/IAccount"
import { useDirectory } from '../hooks/useDirectory';
import { useMemo } from 'preact/hooks';
import { RichText } from './RichText';

interface IAccountSummary {
    account: IPartialAccount,
}

const AccountSummary = ({ account }: IAccountSummary ) => {
    const directory = useDirectory();
    const actualAccount = useMemo(() => directory(account), [directory]);
    if(isPartial(actualAccount)) return <Loader />;
    return (
        <div className={"flex items-center gap-2"}>
            <img src={(actualAccount as IAccount).avatar_static} className={"bg-gray-100 rounded-full object-cover w-[50px] h-[50px]"} />
            <div>
                <div className="font-bold">
                    <RichText>{ (actualAccount as IAccount).display_name }</RichText>
                </div>
                <div className={"text-sm text-gray-500"}>
                    @{ (actualAccount as IAccount).fqn }
                </div>
            </div>
        </div>
    )
};

export { AccountSummary };