import { POST_STATUS } from "@prisma/client";
import { db } from "./db";

async function main() {
  // create a user
  // Define a new user

  const user = await db.user.upsert({
    where: { email: "user@email.com" },
    update: {},
    create: {
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
      password: "password123",
      posts: {
        create: new Array(5).fill(1).map((_, i) => ({
          title: `My ${i} Post`,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          summary: "A brief summary of my first post.",
          excerpt: "Lorem ipsum dolor sit amet...",
          status: POST_STATUS.PUBLISHED,
          slug: "my-first-post",
          categories: ["Technology", "Programming"],
          type: "Article",
          tags: ["Prisma", "TypeScript"],
          thumbnail: "https://example.com/images/my-first-post-thumbnail.jpg",
          comment_status: "open",
          format: "Markdown",
          meta: ["meta1", "meta2"],
          read_time: 5,
          views: 100,
          rating: 4.5,
          likes_number: 10,
        })),
      },
    },
    include: {
      posts: true,
    },
  });
}
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect();
  });
