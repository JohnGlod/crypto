export interface LikeProps {
  rounded?: boolean;
  counter?: number | undefined;
  setCounter?: () => void;
  nftItem?: object;
  setLiked?: () => void;
  liked?: boolean;
  setFavorite ?: () => void;
  delFavorite ?: () => void;
}
