document.addEventListener('DOMContentLoaded', (event) => {
    const videoSrc = 'your-video-file.mp4'; // The source link of the video you want to automate
    let video = findVideoBySrc(videoSrc);

    if (video) {
        playVideoAndWaitForCompletion(video)
            .then(() => {
                console.log('Video playback completed');
                // Additional actions after video completion can be added here
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        console.error('Video with the specified source not found');
    }

    // Function to find the video element by its source link
    function findVideoBySrc(src) {
        const videos = document.querySelectorAll('video');
        for (let video of videos) {
            const sources = video.getElementsByTagName('source');
            for (let source of sources) {
                if (source.src.includes(src)) {
                    return video;
                }
            }
        }
        return null;
    }

    // Function to play the video and wait for its completion
    function playVideoAndWaitForCompletion(video) {
        return new Promise((resolve, reject) => {
            if (!video) {
                reject(new Error('Video element not found'));
            }

            // Add an event listener to resolve the promise when the video ends
            video.addEventListener('ended', () => {
                console.log('Video has ended');
                resolve();
            }, { once: true });

            // Start playing the video
            video.play().catch((error) => {
                reject(new Error('Error playing video: ' + error.message));
            });
        });
    }
});