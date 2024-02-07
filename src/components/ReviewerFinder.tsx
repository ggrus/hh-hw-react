import { useState } from 'react'
import ReviewerResult from './ReviewerResult'
import SettingsForm from './SettingsForm'
import {
  getRandomElementFromArray,
  getReviewers,
  saveSettingsInLocalStorage,
  timeout,
} from '../shared/helpers/helper'
import { Settings, contributorData } from '../shared/interfaces/interfaces'
import {
  LS_SETTINGS_KEY,
  MINIMAL_USERS_TO_ANIMATION,
  NEXT_REVIEWER_MS,
  SEARCH_MAX_MS,
} from '../config'

const ReviewerFinder = () => {
  const [message, setMessage] = useState('Click Find to search!')
  const [winner, setWinner] = useState<contributorData | null>(null)
  const [loading, setLoading] = useState(false)

  const setRandomReviewer = async ({ login, repo, blacklist }: Settings) => {
    if (!login || !repo) {
      setMessage('Some fields are not filled in!')
      return
    }

    saveSettingsInLocalStorage(LS_SETTINGS_KEY, { login, repo, blacklist })

    let reviewers: contributorData[] = [];

    try {
      reviewers = await getReviewers(login, repo)
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setMessage(e.message)
      return
    }

    const blockedUsers = [login, ...blacklist.split(' ')]

    const filteredReviewers = reviewers.filter(
      reviewer => !blockedUsers.includes(reviewer.login)
    )

    if (filteredReviewers.length === 0) {
      setMessage('No one was found :(')
      return
    }

    const reviewer = getRandomElementFromArray(filteredReviewers)

    if (filteredReviewers.length > MINIMAL_USERS_TO_ANIMATION) {
      const timerId = setInterval(() => {
        const randomRevewer = getRandomElementFromArray(filteredReviewers)
        setWinner(randomRevewer)
        setMessage(`Find reviewer. Maybe it's ${randomRevewer.login}?`)
      }, NEXT_REVIEWER_MS)

      await timeout(SEARCH_MAX_MS)
      clearInterval(timerId)
    }

    setWinner(reviewer)
    setMessage(`Your reviewer is ${reviewer.login}`)
  }

  const onSubmitHundler = async (formData: Settings) => {
    setLoading(true)
    await setRandomReviewer(formData)
    setLoading(false)
  }

  return (
    <>
      <h1 className='mb3 mt3'>Find Reviewer</h1>
      {winner && <ReviewerResult user={winner} />}
      <div className='message-box mb3 mt3'>{message}</div>
      <SettingsForm onSubmit={onSubmitHundler} loading={loading} />
    </>
  )
}

export default ReviewerFinder
