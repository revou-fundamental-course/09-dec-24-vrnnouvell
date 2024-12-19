const banner = document.querySelector('.banner-image');
const images = [
    'url(https://images.pexels.com/photos/28607741/pexels-photo-28607741.jpeg)',
    'url(https://i.pinimg.com/736x/88/a0/21/88a021468056292b9838f10def7754ea.jpg)',
    'url(https://images.pexels.com/photos/13022471/pexels-photo-13022471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
    'url(https://images.pexels.com/photos/2246789/pexels-photo-2246789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
    'url(https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1024/v1550463699/byjhjy2fzrhl5tyzhj9e.jpg)'
];

let currentImageIndex = 0;

function changeBannerImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    banner.style.backgroundImage = images[currentImageIndex];
}

setInterval(changeBannerImage, 3000);
