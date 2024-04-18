import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
interface ILogin {
  role: string;
  access: string;
  refresh: string;
}
export default interface IUser {
  authProvider: string;
  birth: string;
  email: string;
  emailVerify: boolean;
  gender: string;
  height: string;
  id: string;
  level: string;
  muscleWeight: string;
  name: string;
  nickname: string;
  profilePhoto: string;
  role: string;
  uniName: string;
  weight: string;
}

interface IMyList {
  id: string;
  date: string;
  content: string;
  title: string;
  photoPaths: [];
  userNickName: string;
  trainerNickName: string;
}

interface IMyReview {
  id: string;
  content: string;
  stopReason: string;
  reviewScore: string;
  userName: string;
  trainerName: string;
  createdAt: string;
}

interface IChatListContent {
  roomId: number;
  nickname: string;
  role: string;
  profilePhoto?: string | null;
}

interface IChatList {
  contents: IChatListContent[];
  last: boolean;
}

export interface ITrainerProfile {
  id: string;
  userId: string;
  introduction: string;
  career: string;
  cost: string;
  month: string;
  nickname: string;
  name: string;
  university: string;
  startTime: string;
  endTime: string;
  reviewAvg: string;
  photoPaths: string;
}

export const loginState = atom<ILogin>({
  key: 'loginState',
  default: {
    role: 'ROLE_EMPTY',
    access: '',
    refresh: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom<IUser>({
  key: 'userState',
  default: {
    authProvider: '',
    birth: '',
    email: '',
    emailVerify: false,
    gender: '',
    height: '',
    id: '',
    level: '',
    muscleWeight: '',
    name: '',
    nickname: '',
    profilePhoto: '',
    role: '',
    uniName: '',
    weight: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const myListState = atom<IMyList>({
  key: 'myListState',
  default: {
    id: '',
    date: '',
    content: '',
    title: '',
    photoPaths: [],
    userNickName: '',
    trainerNickName: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const myReviewState = atom<IMyReview>({
  key: 'myReviewState',
  default: {
    id: '',
    content: '',
    stopReason: '',
    reviewScore: '',
    userName: '',
    trainerName: '',
    createdAt: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const chatListState = atom<IChatList>({
  key: 'chatListState',
  default: {
    contents: [],
    last: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const trainerProfileState = atom<ITrainerProfile>({
  key: 'trainerProfileState',
  default: {
    id: '',
    userId: '',
    introduction: '',
    career: '',
    cost: '',
    month: '',
    nickname: '',
    name: '',
    university: '',
    startTime: '',
    endTime: '',
    reviewAvg: '',
    photoPaths: '',
  },
  effects_UNSTABLE: [persistAtom],
});
