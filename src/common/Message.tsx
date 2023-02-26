import { AccountSummary } from './AccountSummary';
import { IMessage } from './../types/IMessage';

interface IMessageComponent {
    message: IMessage,
}

const Message = ({message}: IMessageComponent) => {

    return(
        <div className="flex flex-col gap-2 bg-white rounded p-4">
            <div className="flex">
                <div className="grow">
                    <AccountSummary account={message.account} />
                </div>
                <div>
                    visibility
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: message.content}}></div>
            <div className="flex">
                <div className="grow">
                    icones
                </div>
                <div>
                    date / edited
                </div>
            </div>

        </div>

    );
};

export { Message };