const fileUpload = document.getElementById("File_Upload");
const hiddenFileInput = document.getElementById("hiddenFileInput");
function fileDropped(){
    console.log("dropped");
}

function openFileSelect(){
    document.getElementById("hiddenFileInput").click();
}
fileUpload.addEventListener("dragover", function(event){
    event.preventDefault();
    console.log("s");
    fileUpload.classList.add("drag-over");
});

fileUpload.addEventListener("drop", function(event){
    event.preventDefault();
    hiddenFileInput.files = event.dataTransfer.files;
    console.log("dropped");
    fileUpload.classList.remove("drag-over");
});