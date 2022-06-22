import { getDoc, getDocs } from 'firebase/firestore'
import { useQuery } from 'react-query'
import { membersCollection } from '../../firebase/collections'
import { QUERY_KEYS } from './queryKeys'

const getMembersList = async () => {
  try {
    const members: UCM.Member[] = []

    const membersSnapshot = await getDocs(membersCollection)

    for (const ms of membersSnapshot.docs) {
      const member = ms.data()
      const jobSnapshot = await getDoc(member.job)

      const memberWithJob: UCM.Member = {
        ...member,
        id: ms.id,
        job: undefined,
        createdAt: member.createdAt.toDate(),
      }

      if (jobSnapshot.exists()) {
        const jobId = jobSnapshot.id
        const job = { ...jobSnapshot.data(), id: jobId }

        memberWithJob.job = job
      }

      members.push(memberWithJob)
    }

    return members
  } catch (_e) {
    return []
  }
}

export const useMembersQuery = () =>
  useQuery<UCM.Member[]>([QUERY_KEYS.MEMBERS_LIST], {
    queryFn: getMembersList,
  })
