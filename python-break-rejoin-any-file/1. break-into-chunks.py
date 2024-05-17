import os

input_file = "/Users/easyres/Downloads/sam.mkv"
output_dir = "/Users/easyres/Documents/MANAGED/from_git/REMANSHARMA/python-break-a-file/step-3-discord/chunks/"

chunk_size = 1000000  # 1 MB

# Open the input file in binary mode for reading
with open(input_file, "rb") as file_in:
    chunk_number = 0

    while True:
        # Read a chunk of data
        chunk = file_in.read(chunk_size)
        
        # If the chunk is empty, we've reached the end of the file
        if not chunk:
            break
        
        # Write the chunk to a new file
        chunk_filename = os.path.join(output_dir, f"{os.path.basename(input_file)}_chunk_{chunk_number}")
        with open(chunk_filename, "wb") as file_out:
            file_out.write(chunk)
        
        print(f"Chunk {chunk_number} saved as: {chunk_filename}")
        
        chunk_number += 1
