import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import * as S from './styledComponents';

// (dt) To define the PostType, you have to "export" your interface PostProps
export interface PostProps {
  id: number;
  username: string;
  date: string | null;
  image: string;
  likeCount: number;
  text: string;
}

export default function Post({
  username,
  date,
  image,
  likeCount,
  text,
}: PostProps) {
  return (
    <S.main>
      <S.Content>
        <S.accountDetails>
          <S.accountPicture>
            <ProfileIcon size={24} />
          </S.accountPicture>
          <S.accountName>
            <p>{username}</p>
          </S.accountName>
          <S.accountDate>
            <p>{date}</p>
          </S.accountDate>
        </S.accountDetails>
        <S.mainContent>
          <p>{text}</p>
        </S.mainContent>
        <S.image>
          <img
            src={image}
            alt="Post image"
            style={{ width: '100%', height: 'auto' }}
          />
        </S.image>
        <S.reactions>
          <S.heart>
            <HeartIcon size={24} />
          </S.heart>
          <S.likes>
            <p>{likeCount}</p>
          </S.likes>
          <S.shareIcon>
            <ShareIcon size={24} />
          </S.shareIcon>
        </S.reactions>
      </S.Content>
    </S.main>
  );
}
