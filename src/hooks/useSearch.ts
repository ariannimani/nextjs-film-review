import { Comment, Post, User } from "@prisma/client";
import useSWR from "swr";
type Entity = "user" | "post" | "comment";

interface UseEntityProps {
  entity: Entity;
  id: string;
}

interface UseEntityResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const getEntityUrl = (entity: Entity, id: string): string => {
  switch (entity) {
    case "user":
      return `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`;
    case "post":
      return `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`;
    case "comment":
      return `${process.env.NEXT_PUBLIC_BASE_URL}/api/comment/${id}`;
    default:
      throw new Error(`Invalid entity "${entity}"`);
  }
};

const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> =>
  fetch(...args).then((res) => res.json());

const useEntity = <T>({ entity, id }: UseEntityProps): UseEntityResult<T> => {
  const { data, error } = useSWR<T>(getEntityUrl(entity, id), fetcher);
  return {
    data: data || null,
    isLoading: !data && !error,
    error: error || null,
  };
};

export const useUser = (id: string): UseEntityResult<User> =>
  useEntity<User>({ entity: "user", id });

export const usePost = (id: string): UseEntityResult<Post> =>
  useEntity<Post>({ entity: "post", id });

export const useComment = (id: string): UseEntityResult<Comment> =>
  useEntity<Comment>({ entity: "comment", id });
