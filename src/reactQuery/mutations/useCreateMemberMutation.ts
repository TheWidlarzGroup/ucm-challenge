import { useMutation } from 'react-query'
import { addDoc, doc, getDoc } from 'firebase/firestore'
import { QUERY_KEYS } from '../queries/queryKeys'
import { queryClient } from '../queryClient'
import { getCollection, jobsCollection } from '../../firebase/collections'

type CreateMemberPayload = {
  name: string
  jobId: string
}

const createMember = async ({ name, jobId }: CreateMemberPayload) => {
  try {
    const jobRef = doc(jobsCollection, jobId)

    const memberSnapshot = await addDoc(getCollection('members'), {
      name,
      job: jobRef,
      createdAt: new Date(),
    })

    const member = (await getDoc(memberSnapshot)).data()

    if (member) {
      const jobSnapshot = await getDoc<UCM.Job>(member.job)
      const job = jobSnapshot.data()

      if (job) {
        member.job = { ...job, id: jobId }
        member.id = memberSnapshot?.id
      }
    }

    return member as UCM.Member
  } catch (e) {
    throw 'Could not create member'
  }
}

export const useCreateMemberMutation = () =>
  useMutation<UCM.Member | null, unknown, CreateMemberPayload>(createMember, {
    onSuccess: (newMember) => {
      if (newMember) {
        queryClient.setQueryData<UCM.Member[]>(QUERY_KEYS.MEMBERS_LIST, (currentMembers) => [
          newMember,
          ...(currentMembers || []),
        ])
      }
    },
  })
