function showModal() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('videoPlayer');
    modal.style.display = 'block';
    
}

function closeModal() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('videoPlayer');
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0; // Reset video to beginning
}
