const Post = require("../models/Post");


const PostController ={
    async create(req,res){
        try {
            const post = await Post.create({...req.body })
            res.status(201).send(post)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el Post' })
        }
    },
   

    async getById(req, res) {
        try {
            const post = await Post.findById(req.params._id)
            res.send(post)
        } catch (error) {
            console.error(error);
        }
    },
    async getPostByName(req, res) {
        try {
            const post = await Post.aggregate([{
                    $match: {
                        name:req.params.name
                    }
                }, ])
                res.send(post)
        } catch (error) {
            console.log(error)
        }
    },
    
    async delete(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params._id)
            res.send({ post, message: 'Post borrado' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: ' problema con el borrado' })
        }
    },
    async update(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true })
          res.send({ message: "Post modificado", post });
        } catch (error) {
          console.error(error);
        }
      },
    async insertComment(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id,
            { $push: { reviews: { ...req.body, userId: req.user._id } } },
            { new: true }
          );
          res.send(post);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem with your review" });
        }
      },
      async getAll(req, res) {
        try {
          const { page = 1, limit = 10 } = req.query;
          const posts = await Post.find()
            .populate("reviews.userId")
            .populate("wishList")
            .limit(limit * 1)
            .skip((page - 1) * limit);
          res.send(posts);
        } catch (error) {
          console.error(error);
        }
      },
      async like(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id,
            { $push: { wishList: req.user._id } },
            { new: true }
          );
          await User.findByIdAndUpdate(
            req.user._id,
            { $push: { wishList: req.params._id } },
            { new: true }
          );
          res.send(post);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem with your like" });
        }
      }

}

module.exports = PostController