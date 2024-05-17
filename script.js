const postContainer = document.getElementById('postContainer');
const images = [
    'image.jpg', 'korea.jpg', 'jimin.jpg', 'dasha.jpg', 'bus.jpg'
];
const descriptions = [
    'Me near to HYBE Labels building!', 'Walking, eating, shopping at Myeong-Dong!', 'Celebrating Jimin's bd in Seoul!', 'Enjoying time w/ my friend', 'Went to the air-cinema!'
];

for (let i = 0; i < 100; i++) {
    const post = createPost(images[i % images.length], descriptions[i % descriptions.length], i);
    postContainer.appendChild(post);
}

function createPost(imageSrc, description, id) {
    const post = document.createElement('div');
    post.classList.add('post');

    const img = document.createElement('img');
    img.src = imageSrc;
    post.appendChild(img);

    const desc = document.createElement('div');
    desc.classList.add('description');
    desc.textContent = description;
    post.appendChild(desc);

    const actions = document.createElement('div');
    actions.classList.add('actions');
    
    const likes = document.createElement('div');
    likes.classList.add('likes');
    likes.textContent = '❤️ 0';
    likes.addEventListener('click', () => {
        const currentLikes = parseInt(likes.textContent.split(' ')[1]);
        likes.textContent = `❤️ ${currentLikes + 1}`;
    });
    actions.appendChild(likes);

    post.appendChild(actions);

    return post;
}


