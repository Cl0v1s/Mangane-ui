import { useMemo } from "preact/hooks";
import  { FormattedMessage } from "react-intl";
import { useConfig } from "../../hooks/useConfig";
import { useInstance } from "../../hooks/useInstance";

import { AccountSummary } from "../../common/AccountSummary";

function IndexView() {
    const { state: instance } = useInstance();
    const { state: config } = useConfig();

    const logo = useMemo(() => {
        return atob(config.instance.logo);
    }, []);
    
    const description = useMemo(() => config.instance.description.replace(/\{\{user_count\}\}/g, (instance?.stats.user_count || 0).toString()), [config.instance.description, instance?.stats.user_count])

    console.log(instance);

    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex items-center gap-2"}>
                <div className={"w-[35px] h-[35px]"} dangerouslySetInnerHTML={{__html: logo }} />
                <h1 className={"text-3xl font-bold text-accent-500"}>{ instance?.title }</h1>
            </div>
            <div dangerouslySetInnerHTML={{__html: description}} />
            <div className={"pt-5 flex flex-col gap-1"}>
                <h3 className={"text-lg"}>
                    <FormattedMessage 
                        id="WelcomeActivity.moderators"
                        defaultMessage="Moderation team"
                    />
                </h3>
                <u><a href={`mailto:${instance?.email}`}>{ instance?.email }</a></u>
                <div>
                    {
                        instance?.contact_account && (
                            <AccountSummary
                                account={instance.contact_account}
                            />
                        )
                    }
  
                </div>
            </div>
        </div>
    );
}

export { IndexView };