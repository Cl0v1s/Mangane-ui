import { useMemo } from "preact/hooks";
import  { FormattedMessage } from "react-intl";
import { useConfig } from "../../hooks/useConfig";
import { useInstance } from "../../hooks/useInstance";

import { AccountSummary } from "../../common/AccountSummary";
import { IPartialAccount } from "../../types/IAccount";

function IndexView() {
    const { state: instance } = useInstance();
    const { state: config } = useConfig();

    const logo = useMemo(() => {
        return atob(config.instance.logo);
    }, []);
    
    const description = useMemo(() => config.instance.description.replace(/\{\{user_count\}\}/g, (instance?.stats.user_count || 0).toString()), [config.instance.description, instance?.stats.user_count])

    return (
        <div className={"flex flex-col gap-4 grow"}>
            <div className={"flex items-center gap-2"}>
                <div className={"w-[35px] h-[35px]"} dangerouslySetInnerHTML={{__html: logo }} />
                <h1 className={"text-5xl font-bold text-accent-500"}>{ instance?.title }</h1>
            </div>
            <div className="grow" dangerouslySetInnerHTML={{__html: description}} />
            <div className={"pt-5 flex flex-col gap-2"}>
                <h3 className={"text-lg font-bold"}>
                    <FormattedMessage 
                        id="WelcomeActivity.moderators"
                        defaultMessage="Moderation team"
                    />
                </h3>
                <u><a href={`mailto:${instance?.email}`}>{ instance?.email }</a></u>
                <div className="flex flex-col gap-3">
                    {
                        instance?.staff.map((pa: IPartialAccount) => <AccountSummary account={pa} />)
                    }
                </div>
                <div className="flex justify-center gap-2 pt-4">
                    {
                        config.instance.links.map((l, index) => <><a href={l.url}>{l.label}</a> {index !== (config.instance.links.length -1) && <span>•</span>} </>)
                    }
                </div>
            </div>
        </div>
    );
}

export { IndexView };