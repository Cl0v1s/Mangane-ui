import { IconMessageCircle2, IconRepeat, IconHeart, IconBookmark, IconHeartFilled } from '@tabler/icons-react';
import { Button } from '../ui/Button';
import { AccountSummary } from './AccountSummary';
import { IMessage } from './../types/IMessage';
import { IconVisibility  } from './../ui/IconVisibility';
import { LocaleDate } from '../ui/LocaleDate';

interface IMessageComponent {
    message: IMessage,
}

const Message = ({message}: IMessageComponent) => {

    const createdAt = new Date(message.created_at);

    return(
        <div className="flex flex-col gap-2 bg-white rounded-lg p-4">
            <div className="flex">
                <div className="grow">
                    <AccountSummary account={message.account} />
                </div>
                <div className="text-gray-300">
                    <IconVisibility visibility={message.visibility} />
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: message.content}}></div>
            <div className="flex pt-2">
                <div className="grow flex gap-3 text-gray-400 items-center">
                        <Button variant="ghost" className="flex gap-1">
                            <IconMessageCircle2 />
                            { message.replies_count }
                        </Button>
                        <Button variant="ghost" className={`flex gap-1 ${message.reblogged && 'text-brand-600'}`}>
                            <IconRepeat />
                            { message.reblogs_count }
                        </Button>
                        <Button variant="ghost" className={`flex gap-1 ${message.favourited && 'text-brand-600'}`}>
                            {
                                message.favourited ? <IconHeartFilled /> : <IconHeart />
                            }
                            { message.favourites_count }
                        </Button>
                        <Button variant="ghost" className={`flex gap-1 ${message.bookmarked && 'text-brand-600'}`}>
                            <IconBookmark />
                        </Button>
                </div>
                <div className="text-gray-400">
                    <LocaleDate date={createdAt} />
                </div>
            </div>

        </div>

    );
};

export { Message };