import {
  CollectionReference,
  DocumentData,
  collection,
  DocumentReference,
} from 'firebase/firestore'
import { firestore } from './setup'

const getCollection = <T = DocumentData>(collectionName: UCM.CollectionKeys) =>
  collection(firestore, collectionName) as CollectionReference<T>

type MemberRaw = UCM.Member & {
  job: DocumentReference<UCM.Job>
}

export const membersCollection = getCollection<MemberRaw>('members')
export const jobsCollection = getCollection<UCM.Job>('jobs')
