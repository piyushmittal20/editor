import Picker from 'emoji-picker-react';

const Emoji = ({setChosenEmoji}) => {

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="emojicontainer">
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default Emoji;