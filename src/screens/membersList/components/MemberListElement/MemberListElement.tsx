import { Image } from 'react-native'
import { images } from '../../../../assets/images/images'
import { CustomText } from '../../../../components/CustomText/CustomText.styled'
import {
  MemberListElementWrapper,
  MemberListElementSide,
  MemberListElementMain,
} from './MemberListElement.styled'

type Props = {
  member: UCM.Member
}

export const MemberListElement = ({ member }: Props) => {
  return (
    <MemberListElementWrapper>
      <MemberListElementSide>
        <Image source={images.man} />
      </MemberListElementSide>
      <MemberListElementMain>
        <CustomText fontWeight="bold" color="primary">
          {member?.name || ''}
        </CustomText>
        <CustomText fontWeight="medium" color="neutral">
          {`ID: ${member.id}`}
        </CustomText>
        {member?.job?.jobTitle ? (
          <CustomText fontWeight="medium" color="neutral">
            {`Job: ${member.job.jobTitle}`}
          </CustomText>
        ) : null}
      </MemberListElementMain>
    </MemberListElementWrapper>
  )
}
