interface IDate {
    date: Date,
}

const format: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',

    hour: '2-digit',
    minute: '2-digit',
};

const LocaleDate = ({ date } : IDate) => {
    return <>{date.toLocaleDateString(undefined, format)}</>
};

export { LocaleDate };