import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import * as S from './styledComponents';

// (dt) To define the CommentType, you have to "export" your interface CommentProps
export interface CommentProps {
  id: number;
  date: string | null;
  username: string;
  comment: string;
  post: number;
}

export default function Comment({ date, username, comment }: CommentProps) {
  return (
    <S.main>
      <S.Content>
        <S.commentPage>
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
          <S.comments>
            <p>{comment}</p>
          </S.comments>
        </S.commentPage>
      </S.Content>
    </S.main>
  );
}
