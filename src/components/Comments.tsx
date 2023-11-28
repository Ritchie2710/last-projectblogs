export default async function comments({ postSlug }: { postSlug: string }) {
  return (
    <div>
      <h2>| commwnts |</h2>
      <h3> Leave a comment</h3>

      <form action={"/api/comments/${postSlug}"} method="POST">
        <label htmlFor="username">Name</label>
        <input type="text" name="username" />

        <label htmlFor="comment">Your comment</label>
        <textarea name="comment" cols={30} rows={10} />

        <button type="submit">send comment</button>
      </form>
    </div>
  );
}
