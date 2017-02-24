/**
 * Created by Tristan on 16/11/24.
 */
const Router = require('koa-router')
const router = new Router()

router.get('',async(ctx)=>{
    await ctx.redirect('index.html')
})

router.get('/index.html', async(ctx) => {
    await ctx.render('index',{title:'Moondust'})
})

module.exports = router;