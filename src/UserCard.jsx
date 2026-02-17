import { UserInfo } from "./UserInfo";

export const UserCard = (props) => {
  return (
    <>
      <h1>User Card</h1>
      <UserInfo {...props} />
    </>
  );
};