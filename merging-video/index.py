from moviepy.editor import *

# Define the paths of the audio and video files
audio_path = "/Users/easyres/Documents/MANAGED/from_git/REMANSHARMA/utility-tools/merging-video/audio.mp4"
video_path = "/Users/easyres/Documents/MANAGED/from_git/REMANSHARMA/utility-tools/merging-video/video.mp4"

# Create instances of VideoFileClip and AudioFileClip
video_clip = VideoFileClip(video_path)
audio_clip = AudioFileClip(audio_path)

# Merge the audio and video clips
video_clip_with_audio = video_clip.set_audio(audio_clip)

# Write the merged video file to a new file
video_clip_with_audio.write_videofile("/Users/easyres/Documents/MANAGED/from_git/REMANSHARMA/utility-tools/merging-video/output.mp4")