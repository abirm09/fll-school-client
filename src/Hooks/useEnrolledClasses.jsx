import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useAxiosSecure } from "./useAxiosSecure";

const useEnrolledClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ["enrolled-classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/enrolled-classes?email=${user?.email}`
      );
      return res.data;
    },
  });
  return { enrolledClasses };
};
export default useEnrolledClasses;
