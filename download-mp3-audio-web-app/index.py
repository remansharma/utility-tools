from flask import Flask, render_template, request, redirect, send_file
from pytube import YouTube

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download', methods=['POST'])
def download():
    youtube_url = request.form['youtube_url']
    yt = YouTube(youtube_url)
    audio = yt.streams.filter(only_audio=True).first()

    print(audio.default_filename) # Khaab.mp4

    audio_path = audio.download()
    print('audio_path', audio_path)

    return send_file(audio_path, as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
