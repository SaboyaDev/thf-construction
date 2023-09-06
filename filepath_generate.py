import os
import json

# Define the directory where your images are stored.
# You might have to change this path.
image_directory = "./src/images/carousel"

# Define the output JSON file name
output_file = "images.json"

# Initialize an empty list to hold image paths
image_list = []

# Iterate through the directory and collect image paths
for filename in os.listdir(image_directory):
    # Assuming you're interested in jpg and png files
    # You can add or remove file types as needed
    if filename.endswith(".jpg") or filename.endswith(".png"):
        path = f"/src/images/carousel/{filename}"
        image_list.append(path)

# Write the list to a JSON file
with open(output_file, "w") as f:
    json.dump(image_list, f, indent=2)

print(f"Generated {output_file} with {len(image_list)} image paths.")