# Défis Japonais 0.1.2

**がんばってね！**

## Usage

### Adding/removing/modifying tasks

1. Open `challenges/js/taskList.js` file
2. Modify the array (titles MUST be unique)

### Uploading a photo

Currently not implemented natively...

1. Upload an image to whatever resource you want (must be public and accessible over the Internet)
2. Open `challenges/js/taskList.js` file
3. Set the absolute url to the `photo` attribute of the task you want to mark as *accomplished*
4. Optionally provide `photo1x` (568px wide) and `photo2x` (1136px wide) attributes for images that fit best the display resolution of the device

### Notes

 - Please keep task titles short, long titles are broken...
 - The `null` value of `photo` property indicates that the task is not complete. The incomplete task shows up with a red tick and no possibility to open it.
 - Don't forget to add commas `,` where necessary.
