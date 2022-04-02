
function timeSince(date) {
    now = new Date();
    const minute = 60000
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7
    const year = week * 52

    const timeDelta = now - date;

    switch (true) {
        case timeDelta < minute:
            return "less than a minute ago";
        case timeDelta < hour:
            const minutesSince = Math.floor(timeDelta/minute);
            if(minutesSince === 1) {
                return "1 minute ago";
            }
            return `${minutesSince} minutes ago`;
        case timeDelta < day:
            const hoursSince = Math.floor(timeDelta/hour);
            if(hoursSince === 1) {
                return "1 hour ago";
            }
            return `${hoursSince} hours ago`;
        case timeDelta < week:
            const daysSince = Math.floor(timeDelta/day);
            if(daysSince === 1) {
                return "1 day ago";
            }
            return `${daysSince} days ago`
        case timeDelta < year:
            const weeksSince = Math.floor(timeDelta/week);
            if(weeksSince === 1) {
                return "1 week ago";
            }
            return `${weeksSince} weeks ago`
        default:
            const yearsSince = Math.floor(timeDelta/year);
            if(yearsSince ===1) {
                return "1 year ago";
            }
            return `${yearsSince} years ago`
    }   
};

function commentCount(comments) {
    
    switch(true) {
        case comments.length === 0:
            return 'No comments yet';
        case comments.length === 1:
            return '1 comment';
        default:
            return `${comments.length} comments`
    }
};

function postCount(posts) {
    switch(true) {
        case posts.length === 0:
            return 'no posts';
        case posts.length === 1:
            return '1 post'
        default:
            return `${posts.length} posts`
    }
}

function format_date(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`
}

module.exports = {timeSince, commentCount, format_date, postCount }