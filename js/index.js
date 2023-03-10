const downloadBtn = document.getElementById("download");
const load= document.getElementById("load");
// Event listener for the button click
downloadBtn.addEventListener("click", () => {
  // Path to the file you want to download
  const filePath = "app-debug.apk";
downloadBtn.style.display="none";
load.style.display="block";
  // Use the Fetch API to get the file content as a Blob object
  fetch(filePath)
    .then(response => response.blob())
    .then(blob => {
      // Use the Blob API to create a URL for the Blob object
      const blobUrl = URL.createObjectURL(blob);

      // Create a link element and set its href to the Blob URL
      const link = document.createElement("a");
      link.href = blobUrl;

      // Set the download attribute to the filename you want to save as
      link.download = "Genus.apk";

      // Click the link element to trigger the download
      link.click();

      // Clean up the Blob URL by revoking it
      URL.revokeObjectURL(blobUrl);
    })
    .catch(error => {
      console.error(error);
    });
});