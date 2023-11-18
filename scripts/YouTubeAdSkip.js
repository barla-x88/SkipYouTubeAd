function SkipYouTubeAd() {
  console.log('SkipYoutubeAd Started');

  const page = document.querySelector('#page-manager');

  //Skips All playing Ads
  const skipAd = () => {
    const video = document.querySelector('.video-stream.html5-main-video');

    //Skip Non-skippable Ads when they start playing
    //prevents Ads from playing
    if (
      video &&
      document.querySelector('.ytp-ad-text.ytp-ad-preview-text-modern')
    ) {
      video.currentTime = video.duration;
    }

    //Click on the skip button
    if (!document.querySelector('.ytp-ad-skip-button-modern')) return;
    document.querySelector('.ytp-ad-skip-button-modern').click();
  };

  const mutationObserver = new MutationObserver(() => {
    skipAd();
  });

  mutationObserver.observe(page, {
    childList: true,
    subtree: true,
  });

  //For the Ads which are loaded you open a youtube video page
  skipAd();
}

SkipYouTubeAd();
