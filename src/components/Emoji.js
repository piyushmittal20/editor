import Picker from 'emoji-picker-react';

const Emoji = ({setChosenEmoji}) => {

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    // const arr = [];
    // arr.push(emojiObject.emoji);
    // console.log(arr);
  };

  return (
    <div className="emojicontainer">
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default Emoji;