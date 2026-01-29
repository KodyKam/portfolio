// client/src/user/DeleteUserWrapper.jsx
import { useParams } from "react-router-dom";
import DeleteUser from "./DeleteUser";

export default function DeleteUserWrapper() {
  const { userId } = useParams();
  return <DeleteUser userId={userId} />;
}