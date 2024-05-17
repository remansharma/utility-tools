import os
import hashlib

input_file = "./input.mkv" # for rechecking the checksum
output_dir = "./chunks/" # these chunks will be used to rejoin the file

chunk_size = 1000000  # 1 MB

# Function to calculate the checksum of a file
def calculate_checksum(file_path):
    hasher = hashlib.sha256()
    with open(file_path, "rb") as file:
        while True:
            data = file.read(65536)  # Read in 64 KB chunks
            if not data:
                break
            hasher.update(data)
    return hasher.hexdigest()

# Restitching the file
restitched_filename = "/restitched.mkv" # this file will be created after rejoining the chunks

with open(restitched_filename, "wb") as restitched_file:
    chunk_number = 0

    while True:
        chunk_filename = os.path.join(output_dir, f"{os.path.basename(input_file)}_chunk_{chunk_number}")
        
        # If the chunk file doesn't exist, we've reached the end of the chunks
        if not os.path.exists(chunk_filename):
            break
        
        # Read the content of the chunk file and write it to the restitched file
        with open(chunk_filename, "rb") as chunk_file:
            restitched_file.write(chunk_file.read())
        
        chunk_number += 1

# Calculate checksums
original_checksum = calculate_checksum(input_file)
restitched_checksum = calculate_checksum(restitched_filename)

# Compare checksums
if original_checksum == restitched_checksum:
    print("Checksums match. Restitching successful.")
else:
    print("Checksums do not match. Restitching failed.")

print("Original checksum:", original_checksum)
print("Restitched checksum:", restitched_checksum)
