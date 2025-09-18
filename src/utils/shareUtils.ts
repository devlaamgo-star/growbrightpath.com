export const shareArticle = async (title: string, description: string, setShowPopup: (show: boolean) => void) => {
  const shareData = {
    title,
    text: description,
    url: window.location.href
  };

  try {
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      setShowPopup(true);
    }
  } catch (error) {
    // If both fail, copy to clipboard as last resort
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowPopup(true);
    } catch (clipboardError) {
      // Manual fallback for unsupported browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowPopup(true);
    }
  }
};