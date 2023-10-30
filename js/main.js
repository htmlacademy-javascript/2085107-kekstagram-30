function getRandomPositiveNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateComments() {
  const comments = [];
  const commentsCount = getRandomPositiveNumber(0, 30);

  for (let i = 0; i < commentsCount; i++) {
    const comment = {
      id: getRandomPositiveNumber(1, 1000),
      avatar: `img/avatar-${getRandomPositiveNumber(1, 6)}.svg`,
      message: getRandomArrayElement([
        'Всё отлично!',
        'В целом всё неплохо. Но не всё.',
        'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
        'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
      ]),
      name: getRandomArrayElement(['Анна', 'Иван', 'Ольга', 'Петр', 'Елена', 'Сергей'])
    };
    comments.push(comment);
  }

  return comments;
}

function createPicture(i) {
  return {
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: `Фото номер ${i + 1}`,
    likes: getRandomPositiveNumber(15, 200),
    comments: generateComments()
  };
}

// eslint-disable-next-line no-unused-vars
const pictures = Array.from({ length: 25 }, (_, i) => createPicture(i));

