declare namespace UCM {
  import { QueryDocumentSnapshot } from 'firebase/firestore'

  type CollectionKeys = 'members' | 'jobs'

  type Job = {
    id: string
    jobTitle: string
  }

  type Member = {
    id: string
    firstName: string
    lastName: string
    job?: Job
  }
}
