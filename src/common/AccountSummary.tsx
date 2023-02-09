import { IAccount } from "../types/IAccount"

interface IAccountSummary {
    account: IAccount,
}

const AccountSummary = ({ account }: IAccountSummary ) => {
    return (
        <div className={"d-flex gap-2"}>
            <img src={account.avatar_static} className={"rounded-circle w-[50px] h-[50px]"} />
            <div>
                <div className="font-bold">
                    { account.display_name }
                </div>
                <div className={"text-sm"}>
                    { account.username }
                </div>
            </div>
        </div>
    )
};

export { AccountSummary };