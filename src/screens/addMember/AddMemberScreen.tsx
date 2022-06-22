import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useJobsQuery } from '../../reactQuery/queries/useJobsQuery'

export const AddMemberScreen = () => {
  const { data: jobs } = useJobsQuery()

  useEffect(() => {
    console.log(jobs)
  }, [jobs])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add member</Text>
    </View>
  )
}
