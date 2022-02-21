const { client, query } = require("./graphql/db-connection");
const q = query;
const blogPosts = require("./data.json");
client
  .query(
    q.Map(
    q.Paginate(
      q.Documents(q.Collection('BlogPost')),
      { size: 9999 }
    ),
    q.Lambda(
      ['ref'],
      q.Delete(q.Var('ref'))
    )
  )
  )
client
  .query(
    q.Map(
      blogPosts,
      q.Lambda(
        "blog",
        q.Create(q.Collection("BlogPost"), {
          data: q.Var("blog"),
        })
      )
    )
  )
  .then(console.log("BlogPosts seeded successfully to FaunaDB"))
  .catch((err) => console.log("Failed to seed BlogPosts", err));
