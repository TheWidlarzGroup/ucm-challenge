declare namespace UCM {
  type CollectionKeys = 'members' | 'jobs'

  type Job = {
    id: string
    jobTitle: string
  }

  type Member = {
    id: string
    name: string
    createdAt: Date
    job?: Job
  }
}
