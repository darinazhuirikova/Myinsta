const postContainer = document.getElementById('postContainer');
const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'
];
const descriptions = [
    'Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'
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


