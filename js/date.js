     function timeAgo(date) {
            const seconds = Math.floor((new Date() - date) / 1000);
            let interval = Math.floor(seconds / 31536000);

            if (interval >= 1) return interval + (interval === 1 ? " year ago" : " years ago");

            interval = Math.floor(seconds / 2592000);
            if (interval >= 1) return interval + (interval === 1 ? " month ago" : " months ago");

            interval = Math.floor(seconds / 86400);
            if (interval >= 1) return interval + (interval === 1 ? " day ago" : " days ago");

            interval = Math.floor(seconds / 3600);
            if (interval >= 1) return interval + (interval === 1 ? " hour ago" : " hours ago");

            interval = Math.floor(seconds / 60);
            if (interval >= 1) return interval + (interval === 1 ? " minute ago" : " minutes ago");

            return Math.floor(seconds) + (seconds === 1 ? " second ago" : " seconds ago");
        }

        
        $(document).ready(function() {
            $('.video-item').each(function() {
                const uploadDate = new Date($(this).data('upload-date'));
                const timeAgoText = timeAgo(uploadDate);
                $(this).find('.video-meta').append(` - ${timeAgoText}`);
            });
        });