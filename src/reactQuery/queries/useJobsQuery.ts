import { getDocs } from 'firebase/firestore'
import { useQuery } from 'react-query'
import { jobsCollection } from '../../firebase/collections'
import { QUERY_KEYS } from './queryKeys'

const getJobs = async () => {
  try {
    const jobs: UCM.Job[] = []

    const jobsSnapshot = await getDocs(jobsCollection)

    for (const js of jobsSnapshot.docs) {
      const job = js.data()

      const jobWithId: UCM.Job = {
        ...job,
        id: js.id,
      }

      jobs.push(jobWithId)
    }

    return jobs
  } catch (_e) {
    return []
  }
}

export const useJobsQuery = () =>
  useQuery<UCM.Job[]>([QUERY_KEYS.JOBS_LIST], {
    queryFn: getJobs,
  })
