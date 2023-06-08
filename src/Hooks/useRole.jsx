import { useAxiosSecure } from "./useAxiosSecure";
import { useAuth } from "./useAuth";
import { useQuery } from "@tanstack/react-query";

export const useRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: role = "user", isLoading: isRoleLoading } = useQuery({
    queryKey: ["role"],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/role?email=${user?.email}`);
        return res.data;
      }
      return "user";
    },
  });
  return { role, isRoleLoading };
};
