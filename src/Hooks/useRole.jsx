import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";
import { useAuth } from "./useAuth";

export const useRole = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: role = [] } = useQuery(["role"], async () => {
    const res = await axiosSecure.get(`/role?email=${user?.email}`);
    return res.data;
  });
  return role;
};
