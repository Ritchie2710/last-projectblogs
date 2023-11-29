import { WEB_SITE } from "config";
export default async function comments({ postSlug }: { postSlug: string }) {
  const WEBSITE_URL = "http://localhost:3001";

  let comments = [];

  try {
    const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      next: { revalidate: 5 },
    });
    const response = await commentsResult.json();
    console.log(response);
    comments = response.comments.rows;
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <h2>| comments |</h2>
      <h3> Leave a comment</h3>

      <form action={`/api/comments/${postSlug}`} method="POST">
        <label htmlFor="username">Name</label>
        <input type="text" name="username" />

        <label htmlFor="comment">Your comment</label>
        <textarea name="comment" cols={30} rows={10} />

        <button type="submit">send comment</button>
      </form>
      {/* @ts-ignore */}
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.username} says...
            <br />
            {comment.content}
          </li>
        );
      })}
    </div>
  );
}
