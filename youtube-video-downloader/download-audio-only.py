from pytube import YouTube

def download_audio(youtube_url, output_path):
    yt = YouTube(youtube_url)
    audio = yt.streams.filter(only_audio=True).first()
    audio.download(output_path)

if __name__ == "__main__":
    # Example usage
    youtube_url = "https://www.youtube.com/watch?v=lM8h5Mm6ODo"
    output_path = "/Users/easyres/Documents/MANAGED/from_git/REMANSHARMA/utility-tools/youtube-video-downloader/"
    download_audio(youtube_url, output_path)
