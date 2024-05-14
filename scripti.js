document.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.getElementById('postContainer');
    const images = [
        'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'
    ];
    const descriptions = [
        'Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'
    ];

    for (let i = 0; i < 100; i++) {
        const post = createPost(images[i % images.length], descriptions[i % descriptions.length]);
        postContainer.appendChild(post);
    }
});

function createPost(imageSrc, description) {
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

    const comments = document.createElement('div');
    comments.classList.add('comments');
    comments.textContent = '💬 0';
    actions.appendChild(comments);

    post.appendChild(actions);

    const commentsSection = document.createElement('div');
    commentsSection.classList.add('comments-section');

    const commentList = document.createElement('div');
    commentList.classList.add('comment-list');
    commentsSection.appendChild(commentList);

    const addComment = document.createElement('div');
    addComment.classList.add('add-comment');
    
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment...';
    addComment.appendChild(commentInput);
    
    const addButton = document.createElement('button');
    addButton.textContent = 'Post';
    addButton.addEventListener('click', () => {
        const commentText = commentInput.value;
        if (commentText) {
            const comment = document.createElement('div');
            comment.classList.add('comment');
            comment.textContent = commentText;
            commentList.appendChild(comment);
            commentInput.value = '';
            
            const currentComments = parseInt(comments.textContent.split(' ')[1]);
            comments.textContent = `💬 ${currentComments + 1}`;
        }
    });
    addComment.appendChild(addButton);

    commentsSection.appendChild(addComment);
    post.appendChild(commentsSection);

    return post;
}
