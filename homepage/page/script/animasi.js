document.querySelectorAll('.crd2, .crd1, .crd').forEach(card => {
    card.addEventListener('mouseover', function() {
        const video = this.querySelector('video');
        if (video) {
            video.play();
        }
    });

    card.addEventListener('mouseout', function() {
        const video = this.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 1;
        }
    });
});