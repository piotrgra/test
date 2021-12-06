
console.log('test');
(async function () {
    let about = await fetch('_posts/2021-11-29-new-blog.md')
    let message = await about;
    
    console.log('mes',message);
})()
