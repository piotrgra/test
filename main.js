let about = await fetch('_posts/2021-11-29-new-blog.md')
let message = await about.json()

console.log('mes',message);