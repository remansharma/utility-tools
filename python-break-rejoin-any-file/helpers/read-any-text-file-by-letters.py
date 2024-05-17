input_file = "/input.txt"
letters_to_read = 100000

with open(input_file, "r") as file_in:
    letter_count = 0
    while letter_count < letters_to_read:
        char = file_in.read(1)
        if not char:
            break  # End of file reached
        print(char, end='')  # Print the character without adding extra newline
        letter_count += 1
