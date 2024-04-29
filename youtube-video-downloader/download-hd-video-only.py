# documentation https://pytube.io/en/latest/
from pytube import YouTube

def Download(link):
    youtubeObject = YouTube(link)
    print(youtubeObject.title)
    print()
    print(youtubeObject.thumbnail_url)
    print()
    print(youtubeObject.streams.filter(file_extension='mp4'))
    print()
    print(youtubeObject.streams.filter(file_extension='mp4', res='1080p'))
    print()
    print('Download started')
    stream = youtubeObject.streams.get_by_itag(137)
    stream.download()
    print('Downloaded')




link = "https://www.youtube.com/watch?v=lM8h5Mm6ODo";
Download(link)