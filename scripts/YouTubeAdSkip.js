function SkipYouTubeAd() {
  console.log('SkipYoutubeAd Running');

  //click on the skip button when it appears
  const skipAd = () => {
    if (!document.querySelector('.ytp-ad-skip-button')) return;
    document.querySelector('.ytp-ad-skip-button').click();
    console.log('Ad skipped');
  };

  const mutationObserver = new MutationObserver(() => {
    skipAd();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  //For the Ads which are loaded you open a youtube video page
  skipAd();
}

SkipYouTubeAd();
