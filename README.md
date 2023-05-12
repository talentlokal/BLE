# BLE

## Getting Started

To run the website locally, follow these steps:

1. Clone the repository to your local machine.
2. Open `index.html` in your preferred web browser.
3. Navigate through the website using the provided links.

## Fast Lane Contributing

We welcome contributions from a specific collaborator to improve the website. If you are the designated collaborator and would like to make changes directly to the main branch, please follow these steps:

1. Make sure you have been granted the necessary permissions to directly push to the main branch.
2. Clone the repository to your local machine: `git clone <repository-url>`
3. Navigate to the repository directory: `cd <repository-name>`
4. Ensure you are on the main branch: `git checkout main`
5. Pull the latest changes from the remote repository: `git pull`
6. Make your changes to the files in the repository.
7. Stage your changes: `git add .` or `git add <specific-file>`
8. Commit your changes with a descriptive message: `git commit -m "Your commit message"`
9. Push your changes to the remote repository: `git push`

Your changes will now be live on the main branch. Make sure to coordinate with other collaborators and keep the main branch up-to-date to avoid potential conflicts or issues.

For other contributors, please fork the repository and create a pull request detailing the changes you've made. The designated collaborator or repository owner will review your pull request and, if approved, merge your changes into the main repository.


## Contributing

We welcome contributions to improve the website. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them to the new branch.
4. Create a pull request, detailing the changes you've made.

We'll review your pull request and, if approved, merge your changes into the main repository.

## Updating Website Content
This website uses a JSON files (named *.json) to store and manage the text and images displayed on the site. 
If you want to update the content of the website without any programming knowledge, simply follow these steps:

Locate the content folder and navigate to the page folder, you want to edit. Open the .json file. 

Here an example: Find the index.json file in the main website content. 
This file contains all the text and image paths that are displayed on the main page of the website.

Open the file: Use a text editor, such as Notepad++ or Visual Studio Code, to open the index.json file. You should see a structure similar to this:

```json
{
  "header": "Welcome to my website",
  "about": {
    "title": "About us",
    "text": "We are a company that ..."
  },
  "images": {
    "banner": "img/banner.jpg",
    "about": "img/about.jpg"
  }
}
```
Inside the file you can find the sections to easily find the content you want to update.

Edit the content: Inside the index.json file, you'll find text and image paths organized into sections. 
To edit the text or change an image, simply modify the corresponding value. For example, to update the header text, change the value next to "header":

```json
"header": "New header text"
```
To change an image, update the image path next to the corresponding key. For instance, to change the banner image, change the value next to "banner":

```json
"banner": "img/new-banner.jpg"
```
You also need to place the new image in the img folder for it to show up on the website.

Make sure to keep the structure of the JSON file intact and not to delete any quotation marks or brackets.

Save the file: After making the desired changes, save the index.json file.

Upload the updated file: Replace the old index.json file on the web server with the updated version. The changes should now be live on the website.

By following these steps, you can easily update the text and images on your website without any programming knowledge. 
Please note that this method is not as user-friendly or secure as a content management system (CMS), but it meets the requirements specified for this project.

