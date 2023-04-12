import { Prisma } from "@prisma/client";

const userProps = Prisma.validator<Prisma.UserArgs>()({});

export type UserProps = Prisma.UserGetPayload<typeof userProps>;

export interface UserPropsWithoutId {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

const commentProps = Prisma.validator<Prisma.CommentArgs>()({});

export type CommentProps = Prisma.CommentGetPayload<typeof commentProps>;

const postProps = Prisma.validator<Prisma.PostArgs>()({});

export type PostProps = Prisma.PostGetPayload<typeof postProps>;

const repliesProps = Prisma.validator<Prisma.RepliesArgs>()({});

export type RepliesProps = Prisma.RepliesGetPayload<typeof repliesProps>;
