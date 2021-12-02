const db = require('../db')

class PostController{
    async createPost(req, res){//Создание записи в базе
        const {post_date, post_name, amount, distance, user_id} = req.body
        const newPost = await db.query('INSERT INTO post (post_date, post_name, amount, distance, user_id) values ($1, $2, $3, $4, $5) RETURNING *', [post_date, post_name, amount, distance, user_id])
        res.json(newPost.rows[0])
    }

    async getPostsByUser(req, res){ //Получить записи, созданные данным пользователем
        const id = req.query.id
        const posts = await db.query('select * from post where user_id = $1', [id])
        res.json(posts.rows)
    }
}

module.exports = new PostController()