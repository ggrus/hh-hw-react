import { ContributorData } from '../shared/interfaces/interfaces'
import DefaultAvatar from '../assets/avatar.png'

interface ReviewerResultProps {
  user: ContributorData
}

const ReviewerResult = ({ user }: ReviewerResultProps) => {
  return (
    <div className='result-box mb3 mt3'>
      <div className='avatar-box'>
        <img
          className='avatar-box__image'
          src={user.avatarUrl || DefaultAvatar}
          alt='avatar'
        />
      </div>
    </div>
  )
}

export default ReviewerResult
