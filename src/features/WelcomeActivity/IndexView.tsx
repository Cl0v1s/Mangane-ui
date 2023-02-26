import { useMemo } from "preact/hooks";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useConfig } from "../../hooks/useConfig";
import { useInstance } from "../../hooks/useInstance";
import { Button } from "../../ui/Button";

import { IconInstance } from '../../ui/IconInstance';
import { AccountSummary } from "../../common/AccountSummary";
import { IPartialAccount } from "../../types/IAccount";

function IndexView() {
    const { state: instance } = useInstance();
    const { state: config } = useConfig();
    
    const description = useMemo(() => config.instance.description.replace(/\{\{user_count\}\}/g, (instance?.stats.user_count || 0).toString()), [config.instance.description, instance?.stats.user_count])

    return (
        <div className="flex flex-col grow px-4 py-5 gap-[100px]">
            <div className="flex gap-3 justify-end">
                <Link to="signup">
                    <Button variant="secondary">
                        <FormattedMessage
                            id="WelcomeActivity.signup-action"
                            defaultMessage="Signup"
                        />
                    </Button>
                </Link>

                <Link to="login">
                    <Button>
                        <FormattedMessage
                            id="WelcomeActivity.login-action"
                            defaultMessage="Login"
                        />
                    </Button>
                </Link>
            </div>
            <div className="flex items-center gap-4 grow max-w-[800px] mx-auto">
                <div className={"flex flex-col gap-4 grow"}>
                    <div className={"flex items-center gap-2"}>
                        <IconInstance size={35} />
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
                <div className="">
                    Placeholder
                </div>
            </div>
        </div>
    );
}

export { IndexView };