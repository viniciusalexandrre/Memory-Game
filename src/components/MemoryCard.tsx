type memoryCardProps = {
  handleClick: () => void
}

const emojiArray = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵']

export default function MemoryCard({ handleClick }: memoryCardProps) {
  return (
    <ul className="card-container">
      {emojiArray.map((emoji, index) => (
        <li key={index} className="card-item">
          <button className="btn btn--emoji" onClick={handleClick}>
            {emoji}
          </button>
        </li>
      ))}
    </ul>
  )
}
