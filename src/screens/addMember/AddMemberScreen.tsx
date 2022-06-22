import { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { images } from '../../assets/images/images'
import { useJobsQuery } from '../../reactQuery/queries/useJobsQuery'

export const AddMemberScreen = () => {
  const { data: jobs } = useJobsQuery()

  useEffect(() => {
    console.log(jobs)
  }, [jobs])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add member</Text>
      <Image source={images.backArrow} />
    </View>
  )
}
